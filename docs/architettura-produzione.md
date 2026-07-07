# Architettura e produzione — kungfucomo.org

Come funziona il sito in produzione: hosting, contenuti (Sanity), email (Brevo),
dominio e variabili d'ambiente. Documento di riferimento per la manutenzione.

---

## Quadro generale

Il sito è un'applicazione **Next.js 14 (App Router)** ospitata su **Vercel**.
I contenuti sono gestiti da **Sanity CMS**; le email del form contatti passano da **Brevo**.

```
Visitatore
   │
   ▼
kungfucomo.org ──(DNS Wix: A + CNAME)──► Vercel (Next.js)
   │                                        │
   │                                        ├─ legge contenuti ──► Sanity CMS
   │                                        │      ▲
   │                                        │      └─ webhook on-demand revalidation
   │                                        │
   └─ invio form contatti ─────────────────┴─ POST /api/contact ──► Brevo ──► email ai destinatari
```

Punto chiave: **non è più un sito statico**. Usa funzioni server (API route, ISR,
revalidation on-demand), quindi **richiede Vercel** — GitHub Pages non è più adatto.

---

## Hosting (Vercel)

- Progetto Vercel: **kung-fu-como**, collegato al repo GitHub `AleDiBlasi0210/kung-fu-como`.
- **Deploy automatico**: ogni push su `main` fa partire un nuovo build+deploy.
- Le **pagine** vengono servite dalla CDN di Vercel (statiche + ISR).
- Le **pagine di dettaglio dinamiche** (attività `/attivita/[year]/[slug]`, news
  `/news/[slug]`) si generano al primo accesso se non erano pre-generate al build
  (`dynamicParams` attivo) → aggiungere contenuti su Sanity **non** causa più 404.

---

## Dominio e DNS

- Dominio `kungfucomo.org`, **DNS gestito da Wix** (nameserver `ns10/ns11.wixdns.net`,
  non modificabili). Wix **non** permette nameserver esterni né MX su sottodomini.
- Il dominio punta a Vercel con il **metodo record** (non nameserver):

| Tipo | Host | Valore |
|---|---|---|
| A | `kungfucomo.org` (`@`) | `216.198.79.1` |
| CNAME | `www` | `4cdb21b00159e745.vercel-dns-017.com` |

- In Vercel sono aggiunti sia `kungfucomo.org` sia `www.kungfucomo.org`, con **www come dominio principale**.
- **Nessun record MX/TXT per la posta in arrivo**: non esistono caselle `@kungfucomo.org` (nessuna email da ricevere).
- **Rollback** (per tornare al vecchio sito Wix): A → `185.230.63.171/186/107`, CNAME `www` → `cdn1.wixdns.net`.

### Nota Wix sui record
Nel campo **Host name** Wix aggiunge da solo il dominio: inserire **solo la parte
prima** (es. `www`, `mail._domainkey`), mai il nome completo.

---

## Contenuti (Sanity CMS)

- Project ID `zydjrdqg`, dataset `production`.
- Studio: `npm run studio:dev` (locale) · `npm run studio:deploy` (pubblica lo Studio hosted).
- Il sito legge i contenuti pubblicati; se un documento manca usa i **fallback** in
  [`src/sanity/fallbacks.ts`](../src/sanity/fallbacks.ts).

### Tipi di contenuto principali
Definiti in [`src/sanity/schemaTypes/`](../src/sanity/schemaTypes/):

| Tipo | Uso |
|---|---|
| `homeSettings` | Testi/immagine sezione "Chi siamo", affiliazioni |
| `siteCopy` | Testi footer + badge pagine + **Codice Fiscale / P.IVA** |
| `contactSettings` | **Config email form**: destinatari, mittente (vedi Brevo) |
| `discipline` / `disciplineProgram` | Discipline e programmi tecnici |
| `location` | Sedi (con campi anteprima "Home ·" per la homepage) |
| `instructor`, `partner`, `contactCard`, `faq` | Contenuti vari |
| `news` | News, con `content` (rich text) mostrato in `/news/[slug]` |
| `event` | Attività/gallery, mostrate in `/attivita/[year]/[slug]` |
| `popup` | Modali all'apertura pagina (ordinabili, tipo sede/evento/testo) |

### Revalidation on-demand (Sanity → sito)
Quando pubblichi su Sanity, un **webhook** chiama `POST /api/revalidate?secret=...`
([route](../src/app/api/revalidate/route.ts)) che invalida la cache del contenuto
modificato → il sito si aggiorna in pochi secondi senza rebuild.

- Configurazione: Sanity → API → Webhooks, URL `https://www.kungfucomo.org/api/revalidate?secret=<REVALIDATE_SECRET>`.
- Il `secret` deve combaciare con la variabile `REVALIDATE_SECRET` su Vercel.

---

## Email del form contatti (Brevo)

Flusso: il form invia a `POST /api/contact`
([route](../src/app/api/contact/route.ts)) → la route legge la config da Sanity
(`contactSettings`) → invia via **API REST di Brevo** (`https://api.brevo.com/v3/smtp/email`).

### Ruoli dell'email
| Ruolo | Valore | Da dove |
|---|---|---|
| **From** (mittente) | `noreply@kungfucomo.org` | `contactSettings.fromEmail` |
| **To** (destinatari) | le email dello staff | `contactSettings.recipientEmails` |
| **Reply-To** | email del visitatore | dai campi del form |

`noreply@kungfucomo.org` **non è una casella reale**: è solo il mittente. Rispondendo
all'email, grazie al Reply-To la risposta va al visitatore.

### Setup Brevo (già fatto, per riferimento)
1. **API key**: Brevo → SMTP & API → **API Keys** → chiave che inizia con `xkeysib-`
   (⚠️ **non** le credenziali SMTP). Salvata su Vercel come `BREVO_API_KEY`.
2. **Domain authentication**: dominio `kungfucomo.org` verificato in Brevo tramite
   record **TXT** (DKIM/SPF + brevo-code) aggiunti nel DNS Wix. Serve per inviare da
   qualsiasi indirizzo `@kungfucomo.org`.
3. **Authorized IPs**: **disattivati** in Brevo → le funzioni Vercel hanno IP dinamici,
   la whitelist li bloccherebbe.

### Cambiare destinatari o mittente
Si fa **solo da Sanity** (documento `contactSettings`), senza toccare il codice:
- `recipientEmails`: chi riceve le richieste
- `fromEmail`: qualsiasi indirizzo `@kungfucomo.org` (dominio già autenticato)

Piano Brevo gratuito: **300 email/giorno** (ampiamente sufficiente).

---

## Variabili d'ambiente (Vercel)

| Variabile | Valore / Scopo |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `zydjrdqg` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SITE_URL` | `https://www.kungfucomo.org` (sitemap/SEO) |
| `REVALIDATE_SECRET` | segreto condiviso col webhook Sanity |
| `BREVO_API_KEY` | API key Brevo (`xkeysib-...`) per il form |

**Nota**: le variabili si applicano solo al **build successivo** → dopo averle
modificate serve un **redeploy**.

Da **non** impostare: `BASE_PATH` / `NEXT_PUBLIC_BASE_PATH` (erano per GitHub Pages,
romperebbero i link sul dominio reale).

---

## Flusso di deploy

1. Modifica il codice → commit → **push su `main`**
2. Vercel builda e pubblica automaticamente
3. Per modifiche **solo di contenuto**: si fanno su Sanity Studio, il webhook aggiorna il sito (nessun deploy)
4. Per aggiungere campi/tipi nuovi allo **Studio**: `npm run studio:deploy`

---

## Manutenzione — promemoria rapidi

- **Aggiungo un'attività/news e dà 404** → non succede più; se capitasse, controlla che
  il documento sia **pubblicato** e che il webhook di revalidation funzioni.
- **Il form dice "inviato" ma non arriva** → controlla i log della funzione
  `/api/contact` su Vercel; verifica `BREVO_API_KEY` (deve essere la API key, non SMTP)
  e che `fromEmail` sia `@kungfucomo.org`.
- **Cambio email destinatari** → Sanity → `contactSettings` → pubblica.
- **Codice Fiscale / P.IVA nel footer** → Sanity → `siteCopy` → campi dedicati → pubblica.
