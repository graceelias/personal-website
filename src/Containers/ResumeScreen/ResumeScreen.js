import "./ResumeScreen.css";
import React from 'react';
import resume from './Assets/Resume.pdf';

function ResumeScreen()
{
    return(
        <section className="resume_background">
        <div >
            <embed src={resume} className = "resume"/>
        </div>
        </section>
    );
}

export default ResumeScreen;