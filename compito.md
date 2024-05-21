## giovedì
- Aggiungi funzionalità di paginazione sia per gli autori che per i blog posts
- Fare la **POST** di un articolo dal form di aggiunta articolo
- Fare la fetch degli articoli presenti nel database e visualizzarli nella homepage
- **GET** `/authors/:id/blogPosts/` ricevi tutti i blog post di uno specifico autore dal corrispondente ID
- **GET** `/blogPosts?title=whatever` filtra i blog post e ricevi l'unico che corrisponda alla condizione di ricerca (es .: titolo contiene "whatever")
- Aggiungi la funzionalità di ricerca dei post nel frontend

---

## lunedì
- Importa la collection di esempio fornita in un database dedicato.

Esegui le seguenti query usando MongoCompass e prendi nota delle query che hai usato e il numero delle risorse trovate.
- Trova tutte le risorse con il dato `isActive` corrispondente a `true`
- Trova tutte le risorse con il dato age maggiore di 26
- Trova tutte le risorse con il dato age maggiore di 26 e minore o uguale a 30
- Trova tutte le risorse con il dato eyes che sia brown o blue
- Trova tutte le risorse che non presentano il dato eyes uguale a green
- Trova tutte le risorse con non presentano il dato eyes uguale a green e neanche blue
- Trova tutte le risorse con il dato company uguale a "FITCORE" e ritorna solo l'email