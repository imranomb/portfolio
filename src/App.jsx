import { useRef, useState, Suspense } from 'react'
import React from 'react'
import './App.css'
import Login from './comp/login'
import Welcome from './comp/welcome'
import {motion, AnimatePresence} from 'framer-motion'
import Life from './Life'
import Views from './Views'
import Select from './Selection'
import Contact from './Contact'
import Books from './Books'
// import MyMovies from './Movies'
// import Games from './Games'
// import InfoPop from './comp/infopop'
// import Gallery from './Gallery'

const MyMovies = React.lazy(() => import('./Movies'));
const Games = React.lazy(() => import('./Games'));
const InfoPop = React.lazy(() => import('./comp/infopop'));
const Gallery = React.lazy(() => import('./Gallery'));

const sections = {
  selec: <Select/>,
  life: <Life/>,
  movies: <MyMovies/>,
  views: <Views/>,
  games: <Games/>,
  gallery: <Gallery/>,
  contact: <Contact/>,
  books: <Books/>
};

function App() {
  const [section, changeSection] = useState(false)
  const [currentBackground, changeBackground] = useState(false)
  const [errorTrigger, changeErrorTrigger] = useState(false);
  const childRef = useRef(null);

  function showError()
  {
    changeErrorTrigger(true);
    setTimeout(() => {
      changeErrorTrigger(false);
    }, 3000);
  }
  function Start()
  {
    childRef.current.handleSectionChange();
    
  }

  return (
    // <div className='absolute top-0 left-0 w-full h-[100svh] flex justify-center items-center bg-gray-950'>
    //   <Contact/>
    // </div>
    
    <div className='h-[100svh] bg-gray-950 w-[100%] flex justify-center items-center relative mainapp bg-img overflow-x-hidden' style={{backgroundImage: `${currentBackground ? "url('./bg_phone.webp')" : "none"}`, backgroundSize: "cover", backgroundPosition: "center"}}>  
    <Welcome/>
    <AnimatePresence>
      {errorTrigger && <InfoPop info={"Please enter your name to continue."}/>}
    </AnimatePresence>
    <Login start={Start} changeBackground={changeBackground} changeErrorTrigger={showError}/>
    <Select changeSection={changeSection} ref={childRef}/>
    <AnimatePresence mode="wait">
      {section && (
        <motion.div className='absolute top-0 left-0 w-full h-auto flex justify-center items-center bg-gray-950'
          key={section}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
        <Suspense fallback={<div className='absolute top-0 left-0 w-full h-auto min-h-[100svh] flex justify-center items-center bg-gray-950 text-white text-3xl'>Loading...</div>}>
          {sections[section]}
        </Suspense>
        
        </motion.div>
       )}
    </AnimatePresence>
    {section != "" && (<button onClick={() => {childRef.current.handleSectionChange(); changeSection("")}} className='absolute hover:cursor-pointer !z-250 left-5 top-5 bg-gray-700 rounded-4xl text-white !p-2 hover:bg-amber-400 duration-300 ease-in'><img src='./icons/doorico.webp' className='w-[32px] h-[32px]'/></button>)}
    </div>
    
  )
}

export default App
