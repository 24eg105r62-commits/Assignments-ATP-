/**
 * Purpose: Analyzes a movie database using array methods.
 * Key Variables:
 * - movies: Collection of movie objects with genre and rating.
 * Logic Flow:
 * - Filters movies by genre.
 * - Updates specific movie rating via map.
 * - Calculates average rating using reduce.
 * - Finds movie by title and its index.
 */
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
];

// 1. filter() only "Sci-Fi" movies
let sciFiMovies = movies.filter((movie) => movie.genre === "Sci-Fi");
console.log("Sci-Fi Movies:", sciFiMovies);

// 2. map() to update rating for a specific title (Interstellar)
movies.map((movie) => {
  if (movie.title === "Interstellar") {
    movie.rating = 8.8;
  }
});

// 3. reduce() to find average movie rating
let totalRating = movies.reduce((acc, movie) => acc + movie.rating, 0);
let avgRating = totalRating / movies.length;
console.log("Average Rating:", avgRating);

// 4. find() movie "Joker"
let joker = movies.find((movie) => movie.title === "Joker");
console.log("Joker details:", joker);

// 5. findIndex() of "Avengers"
let avengersIndex = movies.findIndex((movie) => movie.title === "Avengers");
console.log("Avengers index:", avengersIndex);
