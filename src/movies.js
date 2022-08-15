// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directors = moviesArray.filter((movie) => movie.director) &&
    moviesArray.map((movie) => movie.director);
 
    return [...new Set(directors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

        return moviesArray.filter(
          (eachMovie) =>
            eachMovie.director === "Steven Spielberg" &&
            eachMovie.genre.includes("Drama")
        ).length;
      }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

if (!lotsOfMovies.length) {
    return 0;
  }

  let total = lotsOfMovies.reduce((a, b) => {
    if (b.rate) {
      return a + b.rate;
    } else {
      return a;
    }
  }, 0);

  // you can use Number(), parseInt() or simply plus +
  return Number((total / lotsOfMovies.length).toFixed(2));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
     {
        let dramaMovies = moveisArray.filter((eachMovie) =>
        eachMovie.genre.includes("Drama")
      );
      return ratesAverage(dramaMovies);
  };
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
    const sortedMovies = [...moveisArray];
    // const sortedMovies = array.slice();
    sortedMovies.sort((firstMovie, secondMovie) => {
      const firstMovieYearOfRelease = firstMovie.year;
      const secondMovieYearOfRelease = secondMovie.year;
  
      if (firstMovieYearOfRelease > secondMovieYearOfRelease) {
        return 1;
      } else if (firstMovieYearOfRelease < secondMovieYearOfRelease) {
        return -1;
      } else if (
        firstMovie.title.toLowerCase() > secondMovie.title.toLowerCase()
      ) {
        return 1;
      } else {
        return -1;
      }
    });
  
    return sortedMovies;
  };

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    return [...moviesArray]
      .sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        } else {
          return 0;
        }
      })
      .map((eachMovie) => eachMovie.title)
      .slice(0, 20);
  }

  
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const orderAlphabetically = (array) => {
    const sortedMovies = [...array];
    sortedMovies.sort((firstMovie, secondMovie) => {
      return firstMovie.title.localeCompare(secondMovie.title);
    });
    const movieTitles = sortedMovies.map((movie) => movie.title);
    return movieTitles.slice(0, 20);
  };
  
  // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
  
  const turnHoursToMinutes = (moviesArray) => {
    const moviesWithDurationAsMinutes = moviesArray.map((movie) => {
      const durationAsString = movie.duration;
  
      let duration = 0;
  
      for (let value of durationAsString.split(' ')) {
        const number = parseInt(value);
        if (value.includes('h')) {
          duration += number * 60;
        } else if (value.includes('min')) {
          duration += number;
        }
      }
  
      const movieWithDurationInMinutes = {
        ...movie,
        duration
      };
  
      return movieWithDurationInMinutes;
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (array.length === 0) {
        return null;
      }
    
      const movieAverageScoreByYear = array.reduce((accumulator, movie) => {
        const yearOfMovie = movie.year;
        const scoreOfMovie = movie.score;
    
        if (typeof accumulator[yearOfMovie] === 'undefined') {
          accumulator[yearOfMovie] = [scoreOfMovie];
        } else {
          accumulator[yearOfMovie].push(scoreOfMovie);
        }
    
        return accumulator;
      }, {});
    
      for (let year in movieAverageScoreByYear) {
        const averageScoreOfYear = movieAverageScoreByYear[year].reduce(
          (accumulator, score, index, originalArray) =>
            accumulator + score / originalArray.length,
          0
        );
        movieAverageScoreByYear[year] = averageScoreOfYear;
      }
    
      const auxiliaryArray = Object.entries(movieAverageScoreByYear);
    
      auxiliaryArray.sort((a, b) => {
        const scoreOfYearA = a[1];
        const scoreOfYearB = b[1];
        if (scoreOfYearA > scoreOfYearB) {
          return -1;
        } else {
          return 1;
        }
      });
    
      const year = auxiliaryArray[0][0];
      const score = auxiliaryArray[0][1];
    
      return `The best year was ${year} with an average score of ${score}`;
    };
    