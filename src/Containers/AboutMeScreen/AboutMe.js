import "./AboutMe.css";
import headshot from './Assets/Headshot.png';

function AboutMe()
{
    return(
        <div>
        <div className="about_me_text">
        <div>
            I'm a computer science student with a minor in mechanical engineering at Boston University. I am currently
            enrolled in Boston University's BA/MS program and will be graduating in May 2025 with both my Bachelor's and
            Master's degrees. I have supplemented my studies in computer science with a minor in mechanical engineering as 
            I hope to get into robotics in the future. Currently my interests and coursework lie within artificial 
            intelligence, databases, and software development. 
        </div>
        <br></br>
        <div>
            This past summer I held an internship at Epic and worked on their medical software. During this internship,
            I worked in a React framework and coded primarily in C#, Javascript, and Typescript while creating
            additional functionality for Epic's home health and hospice scheduling software. I considered feedback given
            by customers to determine the exct scope of my project and learned a lot about Epic's existing codebase
            to determine how to best integrate my new features. The work was both fulfilling and educational and I 
            believe I gained a lot from the experience. In addition to writing code, I also checked in regularly with 
            my mentor and team lead and was responsible for setting deadlines for myself and communicating my goals 
            and planned timeline for my project. And I attended both team and company meetings to better understand
            the overall workflow of the company. And finally I presented my work to a variety of people in different 
            roles at the company and fielded questions, comments, and feedback which, in addition to documentation that 
            I wrote up, will be used to further the project in my absence. 
        </div>
        <br></br>
        <div>
            Outside of academics and internship experience, I currently hold a position on the eboard of Boston University's 
            chapter of Upsilon Pi Epsilon, an honor society for the computing and information disciplines. In addition to being
            an active member, I serve as our director of recruitment. As director of recruitment, I'm responsible for recruiting
            applicants as well as handling the application and interview process for hopeful new members. Once those who fit 
            the standards set by our society have been accepted, I help integrate them into the club by ensuring they meet 
            specific requirements, including completing a technical project of their own. My time so far in this position has
            been very beneficial, as I feel that I've been able to help bring in a new group of promising computer science
            students and have also learned more about the other side of the application process through holding interviews and
            reading applications and resumes. I hope to use this experience to improve my own skills as an applicant. 
        </div>
        <br></br>
        <div>
            As I embark on my junior year at Boston University, a main focus of mine is to gain more technical experience
            through joining Hackathons and working on personal projects. I believe that doing this--in combination with
            my more specialized coursework--will set me up well for the future.
        </div>
        </div>
        <img src={headshot} alt="headshot" className="headshot" />
        </div>

    )
}

export default AboutMe;