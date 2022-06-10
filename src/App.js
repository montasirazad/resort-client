import { Route, Routes } from 'react-router-dom';
import AuthProvider from './Components/context/AuthProvider';
import Home from './Components/HomePage/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Room from './Components/Room/Room';
import Rooms from './Components/Rooms/Rooms';


function App() {



  return (
    <AuthProvider  >
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/rooms' element={<Rooms />} />
        
        
      </Routes>

    </AuthProvider>
  );
}

export default App;
