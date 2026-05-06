const moviesData = [
  { id: "m1", title: "Interstellar" },
  { id: "m2", title: "Inception" },
  { id: "m3", title: "The Batman" },
  { id: "m4", title: "Dune" },
];

// Change the code below this line.
const MovieList = (props) => {
  return (
    <ul>
      {props.movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};
// Change the code above this line.

const App = () => {
  return (
    <>
      <MovieList movies={moviesData} />
    </>
  );
};

export default App;
