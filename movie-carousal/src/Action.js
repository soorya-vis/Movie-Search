import React, { useState, useEffect } from "react";
import axios from "axios";
function GetData() {
  const [posts, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?s=robo&apikey=45eb8469")
      .then((response) => {
        setMovies(response.data.Search);
      })
      .catch((err) => console.log(err));
  });

  return posts;
  // (

  //   <div>
  //     {posts.map((movie) => (
  //       <img key={movie.imdbID} src={movie.Poster} alt={movie.imdbID} />
  //     ))}
  //   </div>
  // );
}

export default GetData;
