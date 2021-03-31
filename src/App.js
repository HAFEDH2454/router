import React from 'react';
import {BrowserRouter, Route  } from 'react-router-dom';
import MoviesList from './components/MoviesList';
import {Mfile1, Mfile2, Mfile3, Mfile4, Mfile5} from "./components/Mfile1.js";

function App() {
  return (
        <BrowserRouter>
           <div>
             <MoviesList />
                  <Route exact path="/" component="Home" />
                  <Route exact path="/Mfile1" component= {Mfile1} />
                  <Route exact path="/Mfile2" component= {Mfile2} />
                  <Route exact path="/Mfile3" component= {Mfile3} />
                  <Route exact path="/Mfile4" component= {Mfile4} />
                  <Route exact path="/Mfile5" component= {Mfile5} />
                           </div> 
        </BrowserRouter>);
}

export default App;
