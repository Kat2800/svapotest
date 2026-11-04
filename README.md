# Cloud District — Svapo Shop Torino

Piattaforma e-commerce e showroom interattivo in stile **Synthwave / Cyberpunk**, progettata secondo le più avanzate **fondamenta di Psicologia di Marketing** ad altissima conversione (Ancoraggio, Scarsità, Urgenza, Riprova Sociale, Avversione alla Perdita).

Interfaccia 100% vettoriale con icone SVG nitide e stilizzate (senza emoji).

---

## Novità e Funzionalità Implementate

### 1. Fondamenta di Psicologia di Marketing
Ogni componente rispetta e applica leve persuasive comprovate:
- **Effetto Ancoraggio (Anchoring)**: Prezzi di listino originali barrati (es. ~~€29,90~~ → **€24,90**) con percentuale di sconto in evidenza per massimizzare il valore percepito.
- **Scarsità e Urgenza (Scarcity & Loss Aversion)**: Indicatori dinamici con barra di scorte calante e timer di scadenza reale (5 minuti) per incentivare l'acquisto immediato.
- **Riprova Sociale (Social Proof)**: Recensioni a 5 stelle in vettoriale SVG (4.9/5 con centinaia di recensioni reali) e badge d'autorevolezza vettoriali (*"Più Venduto"*, *"Scelta Pro"*, *"Novità Esclusiva"*).
- **Incentivo alla Spesa Media (Threshold di Spedizione Gratuita)**: Barra di avanzamento dinamica nel carrello (*"Mancano solo €X per la SPEDIZIONE GRATUITA!"*).
- **Micro-copy persuasiva**: Scelta dicotomica nell'upsell tra il beneficio immediato (*"SÌ, AGGIUNGI AL MIO ORDINE (SOLO 8€)"*) e l'avversione alla perdita (*"No grazie, preferisco pagare il prezzo pieno di 14,90€ al prossimo acquisto"*).

---

### 2. Menu Categorie Completo (Icone SVG)
- **Sigarette Elettroniche**: Pod Mod, Starter Kit, Box Mod (es. Kiwi Spark, Magnum Nano, Vaporesso Luxe XR, Wenax M1).
- **Liquidi & Aromi**: Mix&Vape 50ml, Scomposti 20ml, estratti organici (es. Too Puff S'mores, Shinobi Ice, La Tabaccheria 4Pod).
- **Accessori & Ricambi**: Resistenze Mesh, bocchini in cotone grado farmaceutico, caricatori USB-C GaN, laccetti Glow.
- Filtri veloci interattivi sia nella barra di navigazione che nella sezione catalogo.

---

### 3. Upsell Psicologico: "Aggiungi un Liquido a soli 8€"
Ogni volta che l'utente aggiunge un prodotto al carrello (sia dallo showroom 3D che dal catalogo):
- Si apre automaticamente il modal di vendita persuasiva ad alto impatto.
- **Prezzo Ancorato**: ~~€14,90~~ → **Solo €8,00** (-46% di sconto riservato al carrello).
- **Timer di Urgenza Reale**: Conto alla rovescia di 5 minuti (`04:59`) con alert pulsante.
- **Selettore Gusti con Icone SVG**:
  - *Frutti di Bosco Ice (Fresco & Fruttato)*
  - *S’mores Biscotto & Cioccolato (Goloso & Cremoso)*
  - *Menta Glaciale Siberiana (Extra Fresh)*
  - *Tabacco Biondo & Vaniglia (Equilibrato)*
  - *Mango Tropical & Passion Fruit (Esotico)*
- Cliccando su *"SÌ, AGGIUNGI AL MIO ORDINE"*, il liquido con il gusto scelto viene inserito a 8€ e si apre il carrello laterale.

---

### 4. Area Amministratore (admin.html)
- **Accesso Protetto (Login)**:
  - **Nome Utente**: `admin`
  - **Password**: `cloud2026`
- **Gestione Completa Prodotti (CRUD)**:
  - Aggiungi nuovo prodotto (Nome, Categoria, Prezzo scontato, Prezzo barrato, Badge marketing, Scorte, Descrizione, Punti di forza).
  - Modifica prodotti esistenti in tempo reale.
  - Elimina prodotti con conferma di sicurezza.
  - Sincronizzazione automatica con lo store via `localStorage`.

---

### 5. Scatto Foto da Smartphone tramite QR Code (upload.html)
- Nel pannello Admin, cliccando su **"Scansiona QR con il Telefono & Scatta Foto"**:
  1. Viene generato a schermo un QR Code dinamico con sessione protetta.
  2. L'admin inquadra il QR con la fotocamera del telefono.
  3. Sullo smartphone si apre la web app mobile `upload.html` con il pulsante che attiva direttamente la fotocamera posteriore.
  4. La foto scattata viene compressa e inviata istantaneamente al PC via **WebRTC DataChannel P2P + BroadcastChannel + LocalStorage**.
  5. Il pannello Admin sul PC riceve la foto in tempo reale e la imposta subito sulla scheda prodotto.

---

### 6. Modifica della Disposizione e del Layout
Nel pannello Admin, nella tab **"Modifica Disposizione & Layout"**:
- **Scelta del Layout Visivo**:
  - *Griglia 3 Colonne* (Standard Synthwave)
  - *Griglia 4 Colonne* (Compatta ad alta densità)
  - *Vetrina 2 Colonne* (Focus immagini grandi)
- **Riordino dei Prodotti**:
  - Frecce **Su / Giù** e supporto **Drag & Drop** per spostare i prodotti nella sequenza preferita.
  - Possibilità di selezionare quali prodotti mostrare nell'esclusivo **Slider 3D Synthwave** in Home Page.
  - L'ordine impostato dall'admin si riflette istantaneamente sulla pagina principale `index.html`.

---

## Struttura File
- `index.html`: Storefront principale con animazione 3D Synthwave, catalogo prodotti, modal upsell 8€ e carrello laterale (zero emoji, tutto SVG).
- `admin.html`: Pannello di controllo admin (Login, Gestione Prodotti, QR Foto, Disposizione).
- `upload.html`: Web app smartphone per lo scatto e invio foto tramite QR Code.
- `store.js`: Motore dati e repository icone vettoriali SVG unificato.
- `img/`: Immagini dei prodotti ad alta definizione (`kiwi-spark.png`, `magnum-nano.png`, `too-puff.png`).
