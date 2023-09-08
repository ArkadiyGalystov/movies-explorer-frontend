import { Routes, Route } from 'react-router-dom';
import '../../index.css';
import './App.css';

import Main from '../Main/Main.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import Profile from '../Profile/Profile.js';

import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import { useState } from 'react';

function App() {
  const [isLoggedIn] = useState(true);
  const cards = 5;
  const savedCards = 3;
  const cardsList = Array(cards).fill(null);
  const saveCards = Array(savedCards).fill(null);
  return (
      <Routes>
        <Route path='/' element={<Main loggedIn={isLoggedIn} />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/404' element={<PageNotFound />} />
        <Route path='/profile' element={<Profile loggedIn={isLoggedIn} />} />
        <Route path='/movies' element={<Movies loggedIn={isLoggedIn} cards={cardsList} />}/>
        <Route path='/saved-movies' element={<SavedMovies loggedIn={isLoggedIn} cards={saveCards} />}/>
      </Routes>
  );
}

export default App;
