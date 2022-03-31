var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'consumer-key',
  consumer_secret: 'consumer-secret',
  token: 'token',
  token_secret: 'token-secret',
});

yelp.business("blackowned")
  .then(console.log)
  .catch(console.error);

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};


// export const searchYelpBo = (query2) => {
//   return fetch(`https://api.yelp.com/v3/businesses/search?term=${query2}&latitude=37.786882&longitude=-122.399972`)
// }

