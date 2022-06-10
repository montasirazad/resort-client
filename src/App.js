import { Route, Routes } from 'react-router-dom';
import AuthProvider from './Components/context/AuthProvider';
import Home from './Components/HomePage/Home/Home';
import LogIn from './Components/LogIn/LogIn';


function App() {



  return (
    <AuthProvider  >
      <Routes>
        <Route path='/login' element={<LogIn />} />
      </Routes>

    </AuthProvider>
  );
}

export default App;
