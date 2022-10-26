import './App.css';
import { Container } from 'postcss';
import Navbar from './components/Navbar'
import Item from './components/item';


const App =() =>{
  return (
    <> 
    <Navbar />
    <div className='bg-indigo-100 w-full h-screen'></div>
    <Item />
    </>
  )


}

export default App;
