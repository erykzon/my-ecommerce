import logo from './logo.svg';
import './App.css';
import { Container } from 'postcss';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <img src="https://enez76gwp29.exactdn.com/wp-content/uploads/2020/04/Ghibli_logo.png?strip=all&amp;lossy=1&amp;ssl=1" 
            className='header_logo' alt="logo" />
        </div>
      </header>
      <div className='container flex justify-start text-sm'>
            <div className='p-3 m-3'>Movies</div>
            <div className='p-3 m-3'>Accesories</div>
            <div className='p-3 m-3'>Clothes</div>
            </div>
    </div>
  );
}

export default App;
