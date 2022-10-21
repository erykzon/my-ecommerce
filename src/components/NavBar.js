export const NavBar = () => {
    return
    <header>
    <section className='navbar flex sm:justify-start sm:items-stretch'>
      <div className='img w-1/3'>
      <img src="https://enez76gwp29.exactdn.com/wp-content/uploads/2020/04/Ghibli_logo.png?strip=all&amp;lossy=1&amp;ssl=1" 
        className='header_logo' alt="logo" />
      </div>
      <div className='carrito mt-4 p-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
      </div>
       <div id='menu' className='block flex-grow text-sm w-2/3 lg:items-center lg:w-auto lg:flex-grow'>
              <a href='#responsive-nav' className='p-3 mt-4 lg:inline-block'>Movies</a>
              <a href='#responsive-nav' className='p-3 mt-4 lg:inline-block'>Accesories</a>
              <a href='#responsive-nav' className='p-3 mt-4 lg:inline-block'>Clothes</a>
              <a href='#responsive-nav' className='p-3 mt-4 lg:inline-block'>Thermos</a>
              <a href='#responsive-nav' className='p-3 mt-4 lg:inline-block'>Wallpapers</a>
        </div>
    </section>
  </header>

};