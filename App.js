import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import PathRoutes from './components/Helpers/Routes.helpers';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
// import SearchBar from './components/SearchBar/SearchBar.jsx';
// import characters from './data.js';
// import Card from './components/Card/Card.jsx';

function App() {

   // const tarjeta = {
   //    id: 1,
   //    name: 'Rick Sanchez',
   //    status: 'Alive',
   //    species: 'Human',
   //    gender: 'Male',
   //    origin: {
   //       name: 'Earth (C-137)',
   //       url: 'https://rickandmortyapi.com/api/location/1',
   //    },
   //    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   // };

   const [characters, setCharacters]=useState([])
   const {pathname} = useLocation()
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '1Password';

   useEffect(() => {
      !access && navigate('/');
   },[access]);//

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
     setCharacters(characters.filter((char) => char.id !== Number(id)))
   }

   // function Login(userData) {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   return (
      <div className='App'>
         { pathname !== '/' && <NavBar onSearch={onSearch}/> }
         
         <Routes>
            <Route path = {PathRoutes.FORM} element={<Form login = {login}/>} />
            <Route path = {PathRoutes.HOME} element={<Cards characters={characters} onClose={onClose} />} />
            <Route path = {PathRoutes.ABOUT} element={<About />} />
            <Route path = {PathRoutes.DETAIL} element={<Detail />} />
            <Route path = {PathRoutes.FAVORITES} element={<Favorites onClose={onClose} />} />
         </Routes>

         {/* <NavBar onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} /> */}

         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
