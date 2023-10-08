import './App.css';
import React, {useState} from 'react';
import Header from "./Components/Header/Header.js";
import HomeScreen from "./Containers/HomeScreen/HomeScreen.js";
import ResumeScreen from "./Containers/ResumeScreen/ResumeScreen.js";
import AboutMeScreen from "./Containers/AboutMeScreen/AboutMe.js";
import FlixFinderScreen from "./Containers/FlixFinderScreen/FlixFinderScreen.js";

function App() {

  const [buttonClicked, setButtonClicked] = useState(0);
  const [projectClicked, setProjectClicked] = useState(String);

  const handleHomeClick = () => 
  {
    setButtonClicked(1);
    setProjectClicked("None");
  }
  const handleResumeClick = () =>
  {
    setButtonClicked(2);
    setProjectClicked("None");
  }
  const handleProjectsClick = () =>
  {
    setButtonClicked(3);
    setProjectClicked("None");
  }
  const handleAboutMeClick = () =>
  {
    setButtonClicked(4);
    setProjectClicked("None");
  }

  const handlePersonalWebsiteClick = () =>
  {
    setProjectClicked("PersonalWebsite");
  }

  const handleFlixFinderClick = () =>
  {
    setProjectClicked("FlixFinder");
  }

  const handleNeedleFeltingMachineClick = () =>
  {
    setProjectClicked("NeedleFeltingMachine");
  }

  const handleInfraredLightHeadTrackerClick = () =>
  {
    setProjectClicked("InfraredLightHeadTracker");
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
      : buttonClicked === 3  && projectClicked == "PersonalWebsite" ?
      null
      : buttonClicked === 3  && projectClicked == "FlixFinder" ?
      <FlixFinderScreen />
      : buttonClicked === 3  && projectClicked == "NeedleFeltingMachine" ?
      null
      : buttonClicked === 3  && projectClicked == "InfraredLightHeadTracker" ?
      null
      : buttonClicked === 3  ?
      <section className="project_container">
        <Button text="Personal Website" style="personal_website" onClick={handlePersonalWebsiteClick}> </Button>
        <Button text="FlixFinder" style="flix_finder" onClick={handleFlixFinderClick}> </Button>
        <Button text="Needle Felting Machine" style="needle_felting_machine" onClick={handleNeedleFeltingMachineClick}> </Button>
        <Button text="Infrared Light Head Tracker" style="infrared_light_head_tracker" onClick={handleInfraredLightHeadTrackerClick}> </Button>
      </section>
      : buttonClicked === 4 ?
      <AboutMeScreen />
      : <HomeScreen />}
    </div>
    
  );
}

export default App;
