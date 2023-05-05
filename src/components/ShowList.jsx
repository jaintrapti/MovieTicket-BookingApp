// import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all")
    .then((response) => setShows(response.data))
     .catch((error) => console.log(error));
    
  }, []);
  return(
    <div className='container'>
      <h1 className='heading'>All Shows</h1>
      {shows.map(show => (
        <div key={show.show.id}>
          <img src={show.show.image?.medium} alt={show.show.name}/>
          <h2 className='head'>{show.show.name}</h2>
          <p className='para'>{show.show.summary}</p>
          <Link className='link' to={`/shows/${show.show.id}`}>View Details</Link>
        </div>
      
      ))}
    </div>
  );
}

export default ShowList;