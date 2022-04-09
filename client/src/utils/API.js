// var axios = require('axios');

// export const searchBusinesses = (query) => {
//   method: `get`,
//   url: `https://api.yelp.com/v3/businesses/search?term=${query}&latitude=37.786882&longitude=-122.399972`, {
//     headers: {
//       Authorization: `Bearer ${process.env.REACT_APP_API_KEYYELP}`,
//       withCredentials: true,
//     }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });


export const searchBusinesses = (query) => {
  return fetch(`https://api.yelp.com/v3/businesses/search?term=${query}&latitude=37.786882&longitude=-122.399972`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEYYELP}`,
      withCredentials: true,
    }
  });
};




// export const searchBusinesses = (query) => {
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
// };