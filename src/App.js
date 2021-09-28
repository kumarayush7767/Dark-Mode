import React,{ useState , useEffect} from 'react';
import './App.css';

function App() {

  const getTheme = () =>{
    //parse means convert string into javascript object
    return JSON.parse(localStorage.getItem("theme")) || false
  }

  const [theme,setTheme]=useState(getTheme());
  
  useEffect(() => {
    //To Convert a JavaScript object into a string with JSON.stringify().
      localStorage.setItem("theme" , JSON.stringify(theme))
  },[theme]);

  return (
    <div className={theme ? "theme-dark": "" }>
      <div className="content-bg-color main-content">
       <h1>Dark Mode is </h1>
       <input type="checkbox" onChange={ () => setTheme(!theme) } checked={theme ? "true" : ""} />
      </div>
    </div>
  );
}

export default App;
