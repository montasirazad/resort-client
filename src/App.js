import './App.css';
import sunsetVid from './image/sunset.mp4'

function App() {



  return (
    <div  >
       
       <video src={sunsetVid} autoPlay loop muted style={{width:'100%', height:'100vh',objectFit:'cover'}}/>
    </div>
  );
}

export default App;
