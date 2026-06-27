# Manuale di gestione contenuti
## La Fenice Bianca ASD — CMS Sanity Studio

---

## Prima di iniziare

**Cos'è Sanity Studio?**
È il pannello di amministrazione del sito. Da qui puoi aggiungere news, caricare foto degli eventi, modificare gli orari, aggiornare la scheda degli istruttori e molto altro — senza toccare alcun codice.

**Come accedo?**
Apri il browser e vai su:

> **https://kungfu-como-admin.sanity.studio**

Accedi con il tuo account. Se non hai ancora un account, fatti aggiungere come utente da chi gestisce il progetto.

**Cosa succede dopo che modifico qualcosa?**
Ogni volta che clicchi **Publish** in Studio, le modifiche vengono salvate. Per farle apparire sul sito occorre un aggiornamento del sito (detto *deploy*). Se non lo gestisci tu, contatta chi si occupa della parte tecnica e digli che hai pubblicato nuovi contenuti.

> 💡 Alcune modifiche di testo appariranno subito sul sito, altre richiedono il deploy. Se non vedi le modifiche entro qualche minuto, aspetta il prossimo aggiornamento del sito.

---

## Il menu di Sanity Studio

Quando accedi, trovi il menu a sinistra con tutte le sezioni. Le sezioni che userai più spesso sono evidenziate:

```
Home Settings
Site Copy & Tagline
Discipline
Discipline Program
Location / Sede
Instructor            ← aggiorni periodicamente
Contact Card
Partner
─────────────────────
News                  ← aggiorni spesso ⭐
Evento Attività       ← aggiorni spesso ⭐
FAQ                   ← aggiorni spesso ⭐
```

---

---

# SEZIONI AD AGGIORNAMENTO FREQUENTE

---

## ⭐ NEWS

### A cosa serve
Tutto quello che inserisci qui appare nella pagina **Novità** del sito come card con foto, data, categoria e testo introduttivo.

---

📸 **IMMAGINE 1 — Panoramica: Studio vs Sito**
> *Accosta screenshot del menu Studio con "News" selezionato (lista documenti a sinistra) e screenshot della pagina /news del sito aperta nel browser. Uniscile affiancate.*

---

📸 **IMMAGINE 2 — Corrispondenza campi**
> *Screenshot del documento News aperto in Studio (tutti i campi visibili). Affiancalo a uno screenshot di una card news sul sito. Collega con frecce o rettangoli colorati:*
> - *rettangolo rosso su "Titolo" in Studio → titolo grande sulla card*
> - *rettangolo verde su "Data" in Studio → data piccola sulla card*
> - *rettangolo blu su "Categoria" in Studio → badge colorato in alto sulla foto*
> - *rettangolo giallo su "Estratto" in Studio → testo descrittivo sotto al titolo*
> - *rettangolo viola su "Immagine" in Studio → foto di sfondo della card*

---

### Corrispondenza campi

| Campo in Studio | Dove appare sulla card |
|---|---|
| Titolo | Titolo grande della card |
| Slug | Generato automatico — non toccare dopo la pubblicazione |
| Data | Data piccola sopra al titolo |
| Categoria | Badge colorato in alto sulla foto |
| Estratto | Breve descrizione sotto al titolo |
| Immagine | Foto di sfondo |

### Come aggiungere una news — passo per passo

1. Clicca **News** nel menu a sinistra
2. Clicca il pulsante **+ Create** in alto a destra
3. Compila il campo **Titolo**
4. Nel campo **Slug** clicca **Generate** — si compila da solo
5. Compila **Data**, **Categoria**, **Estratto**
6. Clicca su **Immagine** → **Upload** → seleziona la foto dal tuo computer
7. Clicca **Publish** in alto a destra
8. ✅ Avvisa chi gestisce il sito per aggiornarlo

### Come modificare una news esistente

1. Clicca **News** nel menu
2. Clicca sul titolo della news da modificare
3. Modifica i campi che vuoi
4. Clicca **Publish**

---

## ⭐ EVENTO ATTIVITÀ

### A cosa serve
Ogni evento che inserisci appare nella pagina **Attività Svolte**, raggruppato per anno. Cliccando su un evento si apre la gallery fotografica completa.

---

📸 **IMMAGINE 3 — Panoramica: Studio vs Sito (pagina lista attività)**
> *Accosta screenshot del menu Studio con "Evento Attività" selezionato e screenshot della pagina /attivita del sito. Uniscile affiancate.*

---

📸 **IMMAGINE 4 — Corrispondenza campi evento**
> *Screenshot del documento Evento aperto in Studio. Affiancalo alla card evento nella lista del sito. Collega con frecce o rettangoli:*
> - *rettangolo rosso su "Titolo Evento" in Studio → titolo sulla card*
> - *rettangolo verde su "Anno" in Studio → badge anno in alto a destra sulla card*
> - *rettangolo blu su "Immagine Copertina" in Studio → foto grande della card*

---

📸 **IMMAGINE 5 — Sezione Gallery**
> *Screenshot della sezione "Gallery Immagini" dentro un documento evento in Studio (mostra la lista di miniature caricate). Affiancalo alla pagina galleria aperta sul sito (/attivita/anno/slug). Freccia da ogni miniatura in Studio → griglia foto sul sito.*

---

### Corrispondenza campi

| Campo in Studio | Dove appare |
|---|---|
| Titolo Evento | Nome sulla card nella lista attività |
| Slug | Generato automatico — non toccare dopo pubblicazione |
| Anno | Badge anno sulla card + raggruppamento per anno |
| Immagine Copertina | Foto grande sulla card |
| Gallery Immagini | Tutte le foto nella pagina della gallery |
| Alt text (su ogni foto) | Testo alternativo per accessibilità |
| Titolo (su ogni foto) | Didascalia opzionale sotto la foto |

### Come aggiungere un nuovo evento — passo per passo

1. Clicca **Evento Attività** nel menu
2. Clicca **+ Create**
3. Compila **Titolo Evento**
4. Clicca **Generate** per lo Slug
5. Inserisci l'**Anno** (es. `2025`)
6. Clicca **Immagine Copertina** → **Upload** → carica la foto principale
7. Nella sezione **Gallery Immagini** clicca **Add item** per ogni foto da aggiungere
8. Per ogni foto puoi opzionalmente inserire un Alt text e un Titolo
9. Clicca **Publish**
10. ✅ Avvisa chi gestisce il sito

### Come aggiungere foto a un evento già pubblicato

1. Apri l'evento dall'elenco
2. Scorri fino a **Gallery Immagini**
3. Clicca **Add item** e carica le nuove foto
4. Clicca **Publish**

---

## ⭐ FAQ

### A cosa serve
Le domande frequenti che inserisci qui appaiono nella sezione **FAQ** in fondo alla home page del sito.

---

📸 **IMMAGINE 6 — Corrispondenza campi FAQ**
> *Screenshot di un documento FAQ aperto in Studio (si vedono i campi Domanda, Risposta, Ordine). Affiancalo alla sezione FAQ della home del sito aperta e con un accordion espanso. Collega:*
> - *rettangolo rosso su "Domanda" in Studio → testo cliccabile dell'accordion sul sito*
> - *rettangolo verde su "Risposta" in Studio → testo che appare all'interno dell'accordion aperto*
> - *rettangolo blu su "Ordine" in Studio → nota che il numero controlla la posizione nella lista*

---

### Corrispondenza campi

| Campo in Studio | Dove appare |
|---|---|
| Domanda | Testo della riga cliccabile dell'accordion |
| Risposta | Testo che appare all'interno aprendo l'accordion |
| Ordine | Numero intero — controlla la posizione (1 = prima in alto) |

### Come aggiungere una FAQ — passo per passo

1. Clicca **FAQ** nel menu
2. Clicca **+ Create**
3. Scrivi la **Domanda**
4. Scrivi la **Risposta**
5. Inserisci un numero in **Ordine** (es. se ci sono già 4 FAQ, metti `5`)
6. Clicca **Publish**

---

---

# SEZIONI AD AGGIORNAMENTO PERIODICO

---

## ISTRUTTORI

### A cosa serve
Ogni documento che inserisci qui corrisponde a una card nella pagina **Istruttori** del sito.

---

📸 **IMMAGINE 7 — Corrispondenza campi istruttore**
> *Screenshot del documento Instructor aperto in Studio. Affiancalo alla card istruttore corrispondente sul sito. Collega con frecce:*
> - *"Name" → nome grande in basso alla card*
> - *"Title" → badge rosso piccolo sopra al nome (es. "Direttore Tecnico")*
> - *"Description" → testo descrittivo sotto al nome*
> - *"Photo" → foto nella card*
> - *"Order" → nota che controlla l'ordine di apparizione delle card*

---

### Corrispondenza campi

| Campo in Studio | Dove appare sulla card |
|---|---|
| Name | Nome grande |
| Title | Badge rosso sopra al nome |
| Description | Testo descrittivo |
| Photo | Foto |
| Order | Ordine di apparizione (1 = primo da sinistra) |

### Come aggiungere un istruttore

1. Clicca **Instructor** nel menu
2. Clicca **+ Create**
3. Compila **Name**, **Title**, **Description**
4. Clicca **Photo** → **Upload** → carica la foto
5. Inserisci un numero in **Order**
6. Clicca **Publish**

### Come modificare le info di un istruttore

1. Clicca **Instructor** → clicca sul nome dell'istruttore
2. Modifica i campi
3. Clicca **Publish**

---

## SEDI E ORARI

### A cosa serve
Controlla le schede di ogni sede nella pagina **Sedi & Orari**: nome, indirizzo, mappa e orari dei corsi.

---

📸 **IMMAGINE 8 — Corrispondenza sede**
> *Screenshot del documento Location aperto in Studio. Affiancalo alla scheda della sede corrispondente sul sito. Collega:*
> - *"Name" → nome grande della sede*
> - *"Subtitle" → badge rosso sopra al nome*
> - *"Address" → indirizzo sotto al nome*
> - *"Schedule Sections" → blocchi degli orari per disciplina*

---

### Come modificare gli orari di una sede

1. Clicca **Location / Sede** nel menu
2. Clicca sulla sede da modificare
3. Scorri fino a **Schedule Sections**
4. Apri la sezione di interesse (es. "Choy Li Fut")
5. Modifica o aggiungi le voci di orario (ogni voce è una riga, es. "Lunedì 20:30 - 21:30")
6. Clicca **Publish**

---

## CONTATTI

### A cosa serve
Gestisce le card con telefono ed email degli istruttori nella pagina **Contatti**.

---

📸 **IMMAGINE 9 — Corrispondenza contatto**
> *Screenshot del documento Contact Card aperto in Studio. Affiancalo alla card contatto sul sito. Collega i campi principali (Role, Name, Phone label, Email label, Photo) con le aree corrispondenti sulla card del sito.*

---

### Campi principali

| Campo in Studio | Dove appare sulla card |
|---|---|
| Role | Badge rosso sopra al nome |
| Name | Nome dell'istruttore |
| Assigned locations | Testo "Contatto per..." |
| Phone label | Numero di telefono visibile |
| Phone href | Formato `tel:+39XXXXXXXXXX` — rende il numero cliccabile |
| Email label | Indirizzo email visibile |
| Email href | Formato `mailto:indirizzo@email.it` — rende l'email cliccabile |
| Photo | Foto nella card |

---

---

# SEZIONI AD AGGIORNAMENTO RARO

---

## HOME SETTINGS

### A cosa serve
Controlla i testi del blocco **Chi Siamo** nella home page.

---

📸 **IMMAGINE 10 — Corrispondenza Home Settings**
> *Screenshot del documento Home Settings in Studio. Affiancalo alla sezione "Chi Siamo" della home. Collega Mission Label → badge rosso sopra al titolo; Mission Title → titolo grande; Mission Text 1 e 2 → i due paragrafi; Affiliations → lista badge in fondo.*

---

## SITE COPY & TAGLINE

### A cosa serve
Controlla testi sparsi in tutto il sito: footer, pulsante CTA in rosso nella home, e il testo di apertura di ogni pagina (News, Sedi, Istruttori, ecc.).

> ⚠️ Esiste **un solo documento** di questo tipo. Non crearne altri.

---

📸 **IMMAGINE 11 — Corrispondenza Site Copy**
> *Screenshot del documento Site Copy & Tagline aperto in Studio. Affiancalo a uno screenshot del footer del sito. Collega: "Footer brand title" → nome nel footer; "Footer org line" → riga piccola sotto al nome; "Footer description" → testo descrittivo.*
>
> *Sotto, accosta screenshot del blocco CTA rosso della home col campo "Home CTA title" e "Home CTA text" in Studio.*
>
> *Infine, mostra un esempio di badge + testo intro di una pagina (es. /istruttori) e collegalo ai campi "Istruttori badge" e "Istruttori lead".*

---

## DISCIPLINE

### A cosa serve
Gestisce i contenuti delle pagine `/discipline/choy-li-fut` e `/discipline/tai-chi-chuan`: testi, features, immagine hero.

## DISCIPLINE PROGRAM

### A cosa serve
Gestisce il programma ufficiale Plum Blossom che appare in fondo alle pagine disciplina, con tutti i livelli, il curriculum e le stripe.

## PARTNER

### A cosa serve
Gestisce le card nella pagina **Partner**: nome, logo, descrizione, link al sito.

---

---

# PROMEMORIA OPERATIVO

## Prima di pubblicare — lista controllo

- [ ] Ho compilato tutti i campi obbligatori (quelli con l'asterisco rosso)
- [ ] Ho generato lo Slug dal titolo
- [ ] Ho caricato almeno un'immagine dove richiesta
- [ ] Ho controllato che il testo sia corretto

## Dopo aver pubblicato

1. Clicca **Publish** in Studio
2. Avvisa chi gestisce il sito che hai pubblicato nuovi contenuti
3. Aspetta che il sito venga aggiornato (di solito entro pochi minuti dall'aggiornamento)
4. Controlla il risultato sul sito dal browser

## Domande frequenti su Studio

**Ho cliccato Publish ma sul sito non vedo nulla di cambiato.**
Il sito è "statico" — i contenuti vengono "fotografati" al momento dell'aggiornamento. Aspetta che chi gestisce il lato tecnico pubblichi l'aggiornamento.

**Ho creato un documento per sbaglio, come lo elimino?**
Apri il documento → in alto a destra trova il menu con i tre puntini `...` → clicca **Delete**.

**Ho modificato lo Slug dopo aver pubblicato — è un problema?**
Sì. Lo Slug è l'indirizzo URL della pagina. Cambiarlo dopo la prima pubblicazione rompe eventuali link già condivisi. Evitalo.

**Posso pubblicare senza foto?**
Dipende dalla sezione. Per News e Attività è fortemente consigliato avere sempre un'immagine — senza, la card apparirà senza foto.

**In che formato devo caricare le foto?**
JPG o WebP. Dimensione minima consigliata: 1200 px di larghezza. Le foto vengono ritagliate automaticamente — usa il punto di ritaglio (hotspot) trascinando il mirino sull'area importante dell'immagine.
