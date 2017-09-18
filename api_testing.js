const assert = require('assert')

function getAnimals(fetch, id) {

  return fetch('http://api.animalfarmgame.com/animals/' + id)
  .then(response => response.json())
  .then(data => data.results[0])
}

describe('getAnimals', () => {
  it('calls fetch with the correct url', () => {-
  })
    it('parses the response of fetch correctly', () => {
      const fakeFetch = url =>{
     return () => Promise.resolve({
        json: () => Promise.resolve({
        })
       })
      }
     })
    })
