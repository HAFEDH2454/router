import React from 'react';
import { Link } from 'react-router-dom';
import film from "./film.jpg";
import film2 from "./film2.jpg";
import film3 from "./film3.jpg";
import film4 from "./film4.jpg";
import film5 from "./film5.jpg";
import './Movie.css';

function MovieList()
{
return (
     <div className='navbar'>
     <ul >
        <Link to="/" >
           <h1 >Home</h1>
        </Link>
        <Link to="/Mfile1" >
           <li >
           <img src={film} alt="img"/><br/> movie1
        </li>
       </Link>
       <Link to="/Mfile2" >
         <li >
        <img src={film2} alt="img"/><br/> movie2
        </li>
        </Link>
         <Link to="/Mfile3" >
        <li >
        <img src={film3} alt="img"/><br/> movie3
        </li>
         </Link>
         <Link to="/Mfile4" >
        <li >
        <img src={film4} alt="img"/><br/> movie4
        </li>
         </Link>
         <Link to="/Mfile5" >
        <li >
        <img src={film5} alt="img"/><br/> movie5
        </li>
         </Link>
    </ul>

    </div>
  );
};
export default MovieList;