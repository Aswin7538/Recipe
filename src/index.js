import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import BasicExample from './Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './Main';
import { Catagory } from './Catogory';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Allitem } from './Allitem';
import { Fav } from './Fav';
import { Country } from './Country';
import { Detail } from './Detail';
import { Recipe } from './Recipe';
import { Search } from './Search';
import { Countrydetail } from './Countrydetails';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
  <BrowserRouter>
  <BasicExample/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      
      <Route path='/Catogory' element={<Catagory/>}/>
      <Route path='/allitem' element={<Allitem/>}/>
        <Route path='/fav' element={<Fav/>}/>
        <Route path='/country' element={<Country/>}/>
        <Route path='/detail/:strCategory' element={<Detail/>}/>
        <Route path='/cook/:idMeal' element={<Recipe/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/countrydetail/:strArea' element={<Countrydetail/>}/>

     
    </Routes>
  </BrowserRouter>
  </Provider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
