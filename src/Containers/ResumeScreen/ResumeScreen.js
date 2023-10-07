import "./ResumeScreen.css";
import React from 'react';
import resume from './Assets/Resume.pdf';

function ResumeScreen()
{
    return(
        <div >
            <embed src={resume} className = "resume"/>
        </div>
    );
}

export default ResumeScreen;