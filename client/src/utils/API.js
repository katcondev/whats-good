// var Yelp = require('yelp');

// var yelp = new Yelp({
//   consumer_key: 'consumer-key',
//   consumer_secret: 'consumer-secret',
//   token: 'token',
//   token_secret: 'token-secret',
// });

// yelp.business(query)
//   .then(console.log)
//   .catch(console.error);






 // https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};


// export const searchYelpBo = (query2) => {
//   return yelp.business(query);
// }

