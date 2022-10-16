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
            <div className='container' class="flex-wrap">
            <div>Movies</div>
            <div>Accesories</div>
            <div>Clothes</div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
