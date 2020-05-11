import React, {useState} from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/Main";
import DarkModeToggle from "./components/darkModeToggle/DarkModeToggle";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className="app">
            <div className={'x'}>
                <DarkModeToggle darkModeToggle={darkMode} setDarkModeToggle={setDarkMode}/>
            </div>
            <Header darkMode={darkMode}/>
            <Main />
        </div>
  );
}

export default App;
