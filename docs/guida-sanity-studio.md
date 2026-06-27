# Guida a Sanity Studio — La Fenice Bianca ASD

**URL Studio pubblico:** https://kungfu-como-admin.sanity.studio  
**URL Sito:** https://alediblasi0210.github.io/kung-fu-como

> Ogni volta che modifichi un documento e clicchi **Publish**, le modifiche vengono
> acquisite dal sito al prossimo deploy. Se il sito è su GitHub Pages (statico),
> devi triggerare un nuovo deploy dopo ogni modifica importante.

---

## Come è organizzato lo Studio

Nel menu a sinistra trovi le sezioni nell'ordine seguente:

| Sezione Studio | Dove si vede sul sito |
|---|---|
| Home Settings | Home — blocco "Chi Siamo" |
| Site Copy & Tagline | Footer, CTA home, intestazioni pagine |
| Discipline | Home (cards) + pagine `/discipline/...` |
| Discipline Program | Pagine `/discipline/...` — sezione programma ufficiale |
| Location / Sede | Pagina `/sedi` |
| Instructor | Pagina `/istruttori` |
| Contact Card | Pagina `/contatti` |
| Partner | Pagina `/partner` |
| **News** ⭐ | Pagina `/news` |
| **Evento Attività** ⭐ | Pagina `/attivita` + gallery `/attivita/[anno]/[slug]` |
| **FAQ** ⭐ | Home — sezione domande frequenti |

Le sezioni ⭐ sono quelle che aggiornerai più spesso.

---

## ⭐ NEWS — Aggiornamento frequente

**Dove si vede:** pagina `/news`

### Screenshot da fare
1. **Screenshot 1 — Lista news in Studio**
   Menu sinistra → `News` → vedrai l'elenco di tutte le news.  
   Posiziona vicino a: screenshot della pagina `/news` del sito aperta da browser.

2. **Screenshot 2 — Documento news aperto**
   Clicca su una news → vedrai i campi da compilare.  
   Posiziona vicino a: un esempio di card news sul sito con frecce che indicano quali campi corrispondono a cosa.

### Campi e corrispondenza sul sito

| Campo Studio | Dove appare sulla card news |
|---|---|
| Titolo | Titolo grande della card |
| Slug | URL della pagina (generato automatico dal titolo) |
| Data | Data piccola sopra al titolo |
| Categoria | Badge colorato in alto a sinistra sulla foto |
| Estratto | Testo descrittivo sotto al titolo |
| Immagine | Foto di sfondo della card |
| Contenuto | (non usato al momento nella lista) |

### Come aggiungere una news
1. Clicca `News` nel menu sinistra
2. Clicca `+ Create` in alto a destra
3. Compila: Titolo → clicca `Generate` per lo Slug → Data → Categoria → Estratto → Immagine
4. Clicca `Publish`
5. Triggera un nuovo deploy GitHub Pages

---

## ⭐ EVENTO ATTIVITÀ — Aggiornamento frequente

**Dove si vede:** pagina `/attivita` (lista eventi per anno) + pagina galleria `/attivita/[anno]/[slug]`

### Screenshot da fare
1. **Screenshot 1 — Lista eventi in Studio**
   Menu sinistra → `Evento Attività` → elenco eventi.  
   Posiziona vicino a: screenshot della pagina `/attivita` del sito.

2. **Screenshot 2 — Documento evento aperto**
   Apri un evento → mostra i campi principali.  
   Posiziona vicino a: screenshot della card evento sul sito con frecce.

3. **Screenshot 3 — Campo Gallery Immagini**
   Scorri verso il basso nel documento evento per mostrare la sezione `Gallery Immagini`.  
   Posiziona vicino a: screenshot della gallery aperta sul sito.

### Campi e corrispondenza

| Campo Studio | Dove appare |
|---|---|
| Titolo Evento | Nome della card nella lista attività |
| Slug | URL della pagina galleria |
| Anno | Numero anno + raggruppamento per anno nella lista |
| Immagine Copertina | Foto grande della card nella lista |
| Gallery Immagini | Tutte le foto nella pagina galleria dell'evento |
| Alt text (su ogni foto) | Testo alternativo per accessibilità |
| Titolo (su ogni foto) | Didascalia nella galleria |

### Come aggiungere un evento
1. Clicca `Evento Attività` → `+ Create`
2. Compila: Titolo → Slug (Generate) → Anno (es. `2025`) → Immagine Copertina
3. Nella sezione `Gallery Immagini` clicca `Add item` e carica le foto una per una (oppure in blocco)
4. Per ogni foto puoi aggiungere Alt text e Titolo
5. Clicca `Publish`
6. Triggera deploy

---

## ⭐ FAQ — Aggiornamento frequente

**Dove si vede:** home page — sezione "Domande Frequenti" in fondo

### Screenshot da fare
1. **Screenshot 1 — Lista FAQ in Studio**
   Menu sinistra → `FAQ` → elenco domande.  
   Posiziona vicino a: screenshot della sezione FAQ della home.

2. **Screenshot 2 — Documento FAQ aperto**
   Apri una FAQ → mostra i campi.  
   Posiziona vicino a: screenshot di una domanda aperta nella sezione FAQ del sito.

### Campi e corrispondenza

| Campo Studio | Dove appare |
|---|---|
| Domanda | Testo cliccabile dell'accordion |
| Risposta | Testo che appare aprendo l'accordion |
| Ordine | Numero intero che controlla l'ordine di visualizzazione (1 = prima) |

### Come aggiungere una FAQ
1. Clicca `FAQ` → `+ Create`
2. Compila: Domanda → Risposta → Ordine (metti un numero progressivo)
3. Clicca `Publish`

---

## ISTRUTTORI — Aggiornamento periodico

**Dove si vede:** pagina `/istruttori`

### Screenshot da fare
1. **Screenshot 1 — Lista istruttori in Studio**
   Menu sinistra → `Instructor` → elenco.  
   Posiziona vicino a: screenshot della pagina `/istruttori` del sito.

2. **Screenshot 2 — Documento istruttore aperto**
   Apri un istruttore → mostra i campi.  
   Posiziona vicino a: screenshot della card istruttore sul sito con frecce.

### Campi e corrispondenza

| Campo Studio | Dove appare sulla card |
|---|---|
| Name | Nome grande in basso |
| Title | Badge piccolo rosso sopra al nome (es. "Direttore Tecnico") |
| Description | Testo descrittivo sotto al nome |
| Photo | Foto quadrata/rettangolare della card |
| Order | Ordine di apparizione (1 = primo da sinistra) |

### Come aggiungere/modificare un istruttore
1. Clicca `Instructor` → `+ Create` (o apri quello esistente)
2. Compila tutti i campi
3. Per la foto: clicca su `Photo` → `Upload` → seleziona l'immagine
4. Imposta `Order` per controllare la posizione
5. Clicca `Publish`

---

## SEDI E ORARI — Aggiornamento occasionale

**Dove si vede:** pagina `/sedi`

### Screenshot da fare
1. **Screenshot 1 — Documento sede aperto**
   Menu sinistra → `Location / Sede` → apri una sede.  
   Posiziona vicino a: screenshot della sezione sede corrispondente sul sito.

### Campi e corrispondenza

| Campo Studio | Dove appare |
|---|---|
| Name | Nome grande della sede |
| Subtitle | Badge rosso sopra al nome (es. "Nuova sede") |
| Address | Indirizzo sotto al nome |
| Google Maps Embed URL | Mappa interattiva a sinistra |
| Google Maps External URL | Link "Apri su Google Maps" |
| Schedule Sections | Blocchi degli orari per disciplina |

### Come modificare gli orari
1. Apri la sede → scorri a `Schedule Sections`
2. Clicca su una sezione (es. "Choy Li Fut") per modificarla
3. Ogni `Entry` è una riga di orario (es. "Lunedì 20:30 - 21:30")
4. Puoi aggiungere/rimuovere voci
5. Clicca `Publish`

---

## CONTATTI — Aggiornamento raro

**Dove si vede:** pagina `/contatti` — card con telefono/email degli istruttori

### Campi e corrispondenza

| Campo Studio | Dove appare |
|---|---|
| Role | Badge rosso sopra al nome (es. "Direttore tecnico") |
| Name | Nome dell'istruttore |
| Assigned locations | Testo sotto al nome (es. "Contatto per Albate e Como") |
| Phone label | Numero visibile (es. "338 846 6400") |
| Phone href | Link cliccabile — formato `tel:+39XXXXXXXXXX` |
| Email label | Indirizzo email visibile |
| Email href | Link cliccabile — formato `mailto:indirizzo@email.it` |
| Photo | Foto nella card |
| Order | Ordine delle card |

---

## HOME SETTINGS — Aggiornamento raro

**Dove si vede:** home — blocco "Chi Siamo" (sezione con testi sulla missione)

### Campi

| Campo Studio | Dove appare |
|---|---|
| Mission Label | Badge rosso sopra al titolo (es. "La nostra missione") |
| Mission Title | Titolo grande (es. "Chi Siamo") |
| Mission Text 1 | Primo paragrafo |
| Mission Text 2 | Secondo paragrafo |
| Affiliations | Lista badge in fondo (es. "USAcli", "Hung Sing...") |

---

## SITE COPY & TAGLINE — Aggiornamento raro

**Dove si vede:** vari punti del sito — footer, CTA home, intestazioni pagine

Questo documento è unico (ne esiste uno solo). Ogni campo controlla il testo di un'area specifica:

| Campo | Dove appare |
|---|---|
| Footer brand title | Nome nel footer in basso |
| Footer org line | Riga "Associazione Sportiva..." nel footer |
| Footer description | Testo descrittivo nel footer |
| Home CTA title | Titolo del blocco rosso "Inizia il tuo percorso" |
| Home CTA text | Testo sotto al titolo nel blocco rosso |
| Sedi badge / lead | Badge e testo intro nella pagina `/sedi` |
| Attivita badge / lead | Badge e testo intro nella pagina `/attivita` |
| Istruttori badge / lead | Badge e testo intro nella pagina `/istruttori` |
| News badge / lead | Badge e testo intro nella pagina `/news` |
| Contatti badge / lead | Badge e testo intro nella pagina `/contatti` |
| Partner badge / lead | Badge e testo intro nella pagina `/partner` |

---

## DISCIPLINE E PROGRAMMA — Aggiornamento molto raro

**Dove si vede:** home (cards) + pagine `/discipline/choy-li-fut` e `/discipline/tai-chi-chuan`

- `Discipline`: contenuto testuale delle pagine disciplina (testi, features, immagine hero)
- `Discipline Program`: programma ufficiale Plum Blossom con livelli, curriculum, stripe

Il campo `Official Program` dentro ogni Discipline collega il documento programma corrispondente.

---

## PARTNER — Aggiornamento molto raro

**Dove si vede:** pagina `/partner`

Ogni documento partner ha: Name, URL sito (href), Logo (image), Descrizione, Order.

---

## Flusso standard per ogni modifica

```
1. Apri Studio  →  https://kungfu-como-admin.sanity.studio
2. Vai nella sezione giusta (menu sinistra)
3. Crea o apri il documento
4. Modifica i campi
5. Clicca PUBLISH in alto a destra
6. Vai su GitHub → Actions → trigger deploy manuale
   oppure fai una modifica qualsiasi sul codice per avviare deploy automatico
```

---

## Note pratiche

- **Slug:** è l'identificatore URL. Va generato una volta sola dal titolo, non cambiarlo dopo la pubblicazione.
- **Order:** numero intero che controlla l'ordine di visualizzazione. Numeri più bassi = primi.
- **Immagini:** usa JPG o WebP. Dimensione consigliata: almeno 1200px di larghezza per le cover.
- **Hotspot:** nelle immagini con hotspot attivo, puoi trascinare il punto focale per controllare il crop automatico.
- **Deploy:** il sito è statico — i contenuti Sanity vengono "fotografati" al momento del build. Dopo ogni Publish importante, triggera un nuovo deploy.
