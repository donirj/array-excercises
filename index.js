const listaCompra = ['smartphone', 'pantalla', 'pc', 'smartwatch', 'mouse']

listaCompra.push('Aceite de girasol')
console.log(listaCompra)

listaCompra.pop('Aceite de girasol')
console.log(listaCompra)

const movieList = [
  {name: 'fight club',
  director: 'david fincher',
   year: 1999
  },
  {name: 'clockwork orange',
  director: 'stanley kubrick',
   year: 1971
  },
  {name: 'Avengers',
  director: 'Joss whedon',
   year: 2012
  }
]
console.log(movieList)

const movieFilter = movieList.filter(movie => movie.year > 2010)
console.log(movieFilter)

const directorsMap = movieList.map(movie => movie.director)
console.log(directorsMap)

const moviesTitles = movieList.map(movie => movie.name)
console.log(moviesTitles)

const titlesAndDirectors = directorsMap.concat(moviesTitles)
console.log(titlesAndDirectors)

const spreadDirectorsTitles = [...directorsMap, ...moviesTitles]
console.log(spreadDirectorsTitles)