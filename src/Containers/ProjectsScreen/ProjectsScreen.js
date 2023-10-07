import "./ProjectsScreen.css";
import React, {useState} from 'react';

function ProjectsScreen()
{
    const [projectClicked, setProjectClicked] = useState(String);

    const handlePersonalWebsiteClick = () =>
    {
      setProjectClicked("PersonalWebsite");
    }
  
    const Button = ({style, text, onClick}) =>
    {
      return(
        <button type="button" className={style} onClick={onClick}>
          {text}
        </button>
      );
    }

    return(
        <section className="project_container">
            <Button text="Personal Website" style="personal_website"> onClick={handlePersonalWebsiteClick} </Button>
            <Button text="FlixFinder" style="flix_finder" onClick={handleFlixFinderClick}> </Button>
            <Button text="Needle Felting Machine" style="needle_felting_machine" onClick={handleNeedleFeltingMachineClick}> </Button>
            <Button text="Infrared Light Head Tracker" style="infrared_light_head_tracker" onClick={handleInfraredLightHeadTrackerClick}> </Button>
        </section>
    );
}

export default ProjectsScreen;