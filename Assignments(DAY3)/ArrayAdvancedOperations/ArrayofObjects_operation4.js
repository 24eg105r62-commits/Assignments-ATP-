const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
];

//Tasks:
//   1. filter() only "Sci-Fi" movies
let scimov = movies.filter((movie) => {
  if (movie.genre === "Sci-Fi") {
    return movie;
  }
});
console.log(scimov);
// 2. map() to return:
//         "Inception (8.8)"
movies.map((movie) => {
  if (movie.name === "Interstellar") {
    movie.rating = 8.8;
  }
});
//
//    3. reduce() to find average movie rating
let a = movies.reduce((acc, movie) => acc + movie.rating, 0);
let avg = a / movies.length;
console.log(avg);
//    4. find() movie "Joker"
let moviename = movies.find((movie) => movie.title === "Joker");
console.log(moviename);
//    5. findIndex() of "Avengers"
let indexOfmovie = movies.findIndex((movie) => movie.title === "Avengers");
console.log(indexOfmovie);
