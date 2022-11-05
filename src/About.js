import awakenLogo from './awaken.png'

const About = () => {
    return ( 
        <div className="About">
            <h1>Team Awaken Website</h1>
            <p>This is the official website for VRML team awaken. Built by zMarc-, this is a project which is used to store data for the Awaken VRML team. It contains features for looking at game stats and sortable individual player stats.</p>
            <img src={awakenLogo} alt="Team Awaken Logo" />
        </div>
     );
}
 
export default About;