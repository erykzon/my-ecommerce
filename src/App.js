import logo from './logo.svg';
import './App.css';
import { Container } from 'postcss';

function App() {
  return (
    <div className="App">
      <header>
        <section className='navbar flex sm:justify-start sm:items-stretch'>
          <div className='img w-1/3'>
          <img src="https://enez76gwp29.exactdn.com/wp-content/uploads/2020/04/Ghibli_logo.png?strip=all&amp;lossy=1&amp;ssl=1" 
            className='header_logo' alt="logo" />
          </div>
           <div className='menu flex text-sm w-2/3 items-center justify-center '>
                  <div className='p-3 m-auto '>Movies</div>
                  <div className='p-3 m-auto '>Accesories</div>
                  <div className='p-3 m-auto '>Clothes</div>
                  <div className='p-3 m-auto '>Thermos</div>
                  <div className='p-3 m-auto '>Wallpapers</div>
            </div>
        </section>
      </header>
    </div>
  );
}

export default App;
