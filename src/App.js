import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/cart';

function App() {
 const [Countries, setCountries]= useState([]);
 const [cart ,setCart] = useState([]);
useEffect(() =>{
  fetch('https://restcountries.eu/rest/v2/all')
  .then(res =>res.json())
  .then(data =>
    {setCountries(data);
      
      const names = data.map(country=> country.name);
      
    })
  .catch(error=>console.log(error))
},[])

const handleAddCountry = (country) => { 
const nwCart = [...cart,country];
setCart(nwCart);

}
  return (
    <div className="App">
      <h1>Country loaded:{Countries.length}</h1>
      <h2>Country added:{cart.length}</h2>
      <Cart cart={cart}></Cart>

      <ul>
         {
          Countries.map( country =>  <Country country={country}  handleAddCountry={ handleAddCountry} key ={country.alpha3Code}> </Country> )
         }
      </ul>

      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
