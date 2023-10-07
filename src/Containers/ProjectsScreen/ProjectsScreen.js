import "./ProjectsScreen.css";

function ProjectsScreen()
{
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
            <Button text="Personal Website" style="personal_website"> </Button>
            <Button text="FlixFinder" style="flix_finder"> </Button>
            <Button text="Needle Felting Machine" style="needle_felting_machine"> </Button>
            <Button text="Infrared Light Head Tracker" style="infrared_light_head_tracker"> </Button>
        </section>
    );
}

export default ProjectsScreen;