import { Link } from 'react-router-dom'
import {useState} from 'react'

const Navbar = () => {
    var i = 0;

    const [color1, setColor1] = useState('#212121')
    const [color2, setColor2] = useState('#212121')
    const [color3, setColor3] = useState('#212121')

    const handleClick = (i) => {
        switch(i){
            case 0: setColor1('black')
            setColor2('black')
            setColor3('black') 
            break;
            case 1: setColor1('#F07D01')
            setColor2('black')
            setColor3('black')
            break;
            case 2: setColor2('#F07D01')
            setColor1('black')
            setColor3('black')
            break;
            case 3: setColor3('#F07D01')
            setColor2('black')
            setColor1('black')
            break;
        }
        console.log('1:' + color1 + '2:' + color2 + '3:' + color3)
    }
    return ( 
        <nav className="navbar">
            <Link to="/"  className="navbar-title" onClick={() => handleClick(0)}>Team Awaken</Link>
            <div className="navbar-links">
                <Link to="/PastMatches" onClick={() => handleClick(2)} style={{
                    borderWidth: 1,
                    border: 'solid',
                    borderBottomColor: color2,
                    borderColor: 'black'
                }}>Matches</Link>
                <Link to="Stats" onClick={() => handleClick(3)} style={{
                    borderWidth: 1,
                    border: 'solid',
                    borderBottomColor: color3,
                    borderColor: 'black'
                }}>Player Stats</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;