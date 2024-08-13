import { useState } from 'react';
import './App.css';
import Alert from './components/alert';
import Area from './components/area';
import Navbar from "./components/navbar";

function App() {
  let [alert, setalert] = useState(null)
  let [mode,setmode]=useState("light")
 function alertshow(type,title,message) {
   setalert({
     type: type,
     title: title,
     message:message
   })
   setTimeout(() => {
     setalert(null)
   }, 3000);
 }
  const toggleMode = () => {
   if (mode=="light") {
     setmode("dark")
     document.body.style.backgroundColor = "#3e3e42";
     document.body.style.color = "white";
     alertshow("dark",'Dark mode',"The dark mode has been activated")
   }
   else {
     setmode("light")
     document.body.style.backgroundColor = "white";
     document.body.style.color = "black";
      alertshow("success", "Light mode", "The Light mode has been activated");
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}  />
      <Area alert={alertshow} mode={mode}></Area>
      
    </>
  );
}

export default App;
