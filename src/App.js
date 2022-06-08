import './App.css';
import vid from './image/beach.mp4'

function App() {



  return (
    <div  >
       
       <video src={vid} autoPlay loop muted style={{width:'100%', height:'100vh',objectFit:'cover'}}/>
    </div>
  );
}

export default App;
