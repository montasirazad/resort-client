import AuthProvider from './Components/context/AuthProvider';
import Home from './Components/HomePage/Home/Home';


function App() {



  return (
    <AuthProvider  >
      <Home />

    </AuthProvider>
  );
}

export default App;
