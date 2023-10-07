import './App.css';
import React, {useState} from 'react';
import Header from "./Components/Header/Header.js";
import HomeScreen from "./Containers/HomeScreen/HomeScreen.js";
import ResumeScreen from "./Containers/ResumeScreen/ResumeScreen.js";
import AboutMeScreen from "./Containers/AboutMeScreen/AboutMe.js";

function App() {

  const [buttonClicked, setButtonClicked] = useState(0);

  const handleHomeClick = () => 
  {
    setButtonClicked(1);
  }
  const handleResumeClick = () =>
  {
     setButtonClicked(2);
  }
  const handleProjectsClick = () =>
  {
    setButtonClicked(3);
  }
  const handleAboutMeClick = () =>
  {
      setButtonClicked(4);
  }
    
  const Button = ({style, text, onClick}) =>
  {
    return(
      <button type="button" className={style} onClick={onClick}>
        {text}
      </button>
    );
  }

  return (
    <div className="App">
      <Header />
      <section className="button_container">
            <Button style = "home_button" text = "Home" onClick = {handleHomeClick}> </Button>
            <Button style = "resume_button" text = "Resume" onClick = {handleResumeClick}></Button>
            <Button style = "projects_button" text = "Projects" onClick = {handleProjectsClick}>Test</Button>
            <Button style = "about_me_button" text = "About Me" onClick = {handleAboutMeClick}></Button>
        </section>
      {buttonClicked === 2 ?
      <ResumeScreen />
      : buttonClicked === 3 ?
      null
      : buttonClicked === 4 ?
      <AboutMeScreen />
      : <HomeScreen />}
    </div>
    
  );
}

export default App;
