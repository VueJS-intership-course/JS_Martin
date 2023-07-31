function movies(array) {
  let movies = [];

  for (const line of array) {
    if (line.includes('addMovie')) {
        let name = line.split('addMovie ')[1];
        movies.push({name})
    } else if (line.includes('directedBy')) {
        let [movieName, director] = line.split(' directedBy ');
        
        let movie = movies.find(element => element.name === movieName);

        if (movie) {
            movie.director = director;
        }
    } else if (line.includes('onDate')) {
        let [movieName, date] = line.split(' onDate ');

        let movie = movies.find(element => element.name === movieName);

        if (movie) {
            movie.date = date;
        }
    }
  }

  for (const movie of movies) {
    if (movie.name && movie.director && movie.date) {
        console.log(JSON.stringify(movie));
    }
  }
}
movies([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen',
]);
