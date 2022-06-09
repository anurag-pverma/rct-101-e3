import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes , Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      {
        // Code here
        
      }
      <Navbar/>
      {/* <Login/> */}
      <Routes>
      <Route path="" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>}/>

      </Routes>
    


      
    </div>
  );
}

export default App;
