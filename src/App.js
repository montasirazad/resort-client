import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import BookRoom from './Components/BookRoom/BookRoom';
import AuthProvider from './Components/context/AuthProvider';
import Home from './Components/HomePage/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Rooms from './Components/Rooms/Rooms';


function App() {



  return (
    <AuthProvider  >
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/about' element={<About />} />
        <Route path='/book-room/:type' element={<BookRoom />} />
        
        
      </Routes>

    </AuthProvider>
  );
}

export default App;
