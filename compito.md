## giovedì 16/05
- Aggiungi funzionalità di paginazione sia per gli autori che per i blog posts
- Fare la **POST** di un articolo dal form di aggiunta articolo
- Fare la fetch degli articoli presenti nel database e visualizzarli nella homepage
- **GET** `/authors/:id/blogPosts/` ricevi tutti i blog post di uno specifico autore dal corrispondente ID
- **GET** `/blogPosts?title=whatever` filtra i blog post e ricevi l'unico che corrisponda alla condizione di ricerca (es. titolo contiene "whatever")
- Aggiungi la funzionalità di ricerca dei post nel frontend

---

## lunedì 20/05
- Importa la collection di esempio fornita in un database dedicato.

Esegui le seguenti query usando MongoCompass e prendi nota delle query che hai usato e il numero delle risorse trovate.
- Trova tutte le risorse con il dato `isActive` corrispondente a `true`
- Trova tutte le risorse con il dato age maggiore di 26
- Trova tutte le risorse con il dato age maggiore di 26 e minore o uguale a 30
- Trova tutte le risorse con il dato eyes che sia brown o blue
- Trova tutte le risorse che non presentano il dato eyes uguale a green
- Trova tutte le risorse con non presentano il dato eyes uguale a green e neanche blue
- Trova tutte le risorse con il dato company uguale a "FITCORE" e ritorna solo l'email

---

## giovedì 23/05
Il backend dovrebbe includere queste nuove routes:
- **PATCH** `/authors/:authorld/avatar`, carica un'immagine per l'autore specificato e salva l'URL creata da cloudinary nel database.
- **PATCH** `/blogPosts/:blogPostld/cover`, carica un'immagine per il post specificato dall'id. Salva l'URL creato da Cloudinary nel post corrispondente.

EXTRA (facoltativo): Invia un'email all'autore quando pubblica un nuovo blog post e quando un nuovo autore si registra sulla piattaforma

- Assicurati di inserire I'API key, e I'API secret di Cloudinary sul tuo .env
- Assicurati di importare `dotenv/config` per inizializzare dotenv (non è necessario installarlo)
- Assicurati di avere la key di sendgrid nel tuo .env sotto la voce `SENDGRID API KEY`