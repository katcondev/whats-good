import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=newyork`, {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEYYELP}`
},
  params: {
  categories: 'breakfast_brunch',
}
})
.then((res) => {
console.log(res)
})
.catch((err) => {
console.log ('error')
})
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )
  }
}

