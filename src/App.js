import Pages from './pages/Pages';

import Home from './pages/Home';
import {BrowserRouter} from 'react-router-dom'
import Category from './components/Category';
import Popular from './components/Popular';
import Search from './components/Search';
import NavBar from './components/NavBar';
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <div className='App'>
      
    
    
    <Category/>
    <Search/>
    <Pages/>
    <GlobalStyle/>
  
  </div>
  );
}
const GlobalStyle = createGlobalStyle`
  body {
   background-color: white;
   
  }`

export default App;
