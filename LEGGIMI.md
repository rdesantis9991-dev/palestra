# Palestra: come metterla sull'iPhone

L'app è fatta da questi 7 file, da tenere sempre insieme nella stessa cartella:
`index.html`, `sw.js`, `manifest.json`, `icon-180.png`, `icon-192.png`, `icon-512.png` (più questo LEGGIMI).

## 1. Provala sul PC (facoltativo)
Fai doppio clic su `index.html`: si apre nel browser e funziona già, anche se senza la modalità offline.
Con F12 → icona del telefono puoi vederla a misura di iPhone.

## 2. Pubblicala gratis con GitHub Pages
1. Crea un account su https://github.com, se non ce l'hai.
2. In alto a destra clicca **+ → New repository**:
   - nome: `palestra`
   - visibilità: **Public**. Le Pages gratuite richiedono un repository pubblico. Nel repository finisce solo il codice: i tuoi allenamenti restano nel telefono e non vanno mai su GitHub.
   - clicca **Create repository**.
3. Nella pagina del repository clicca **uploading an existing file**, trascina tutti i file e poi **Commit changes**.
4. Vai in **Settings → Pages**. Sotto *Build and deployment* scegli *Source: Deploy from a branch*, *Branch: main*, cartella `/ (root)`, poi **Save**.
5. Dopo 1–2 minuti l'app sarà online all'indirizzo
   `https://TUONOMEUTENTE.github.io/palestra/`

## 3. Installala sull'iPhone
1. Apri quell'indirizzo con **Safari**. Deve essere proprio Safari.
2. Tocca **Condividi** (il quadrato con la freccia) → **Aggiungi a schermata Home** → **Aggiungi**.
3. Da ora la apri dall'icona: parte a schermo intero e funziona anche senza rete.

## Come si usa
- **Schede**: crea le tue schede (A, B, C…) con esercizi, serie, ripetizioni, kg e recupero. L'ordine delle schede è quello della rotazione.
- **Oggi**: ti propone la scheda successiva a quella dell'ultima volta. Durante l'allenamento i kg e le ripetizioni sono già precompilati con quelli dell'ultima volta: correggi se serve e tocca ✓ a ogni serie. Parte il timer di recupero, con un bip alla fine.
- **Storico**: tutti gli allenamenti, divisi per mese. Tocca un allenamento per vedere il dettaglio.
- **Progressi**: grafico per esercizio, con carico massimo, 1RM stimato (formula di Epley) e volume.
- **Backup**: esporta un file `.json`, da salvare in File o iCloud Drive, e reimportalo quando serve.

## Da sapere
- **I dati stanno solo nel telefono.** Se rimuovi l'icona dalla Home o cancelli i dati di Safari li perdi. Fai un backup ogni tanto.
- **Il bip del timer** non si sente con l'interruttore del silenzioso attivo, né se l'app è chiusa o in background. Il conto alla rovescia resta comunque corretto quando la riapri.
- **Per modificare l'app** cambi il file su GitHub, aprendo il file e cliccando la matita oppure ricaricandolo. Sul telefono la nuova versione compare alla seconda apertura dell'app, perché la prima la scarica in background.
