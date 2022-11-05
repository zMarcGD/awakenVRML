import{initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs, query, where, onSnapshot, orderBy, doc, addDoc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAzntZTDwZlyqIqCgjOGHgIkXudP_yFdx4",
    authDomain: "awakenstatsv2.firebaseapp.com",
    projectId: "awakenstatsv2",
    storageBucket: "awakenstatsv2.appspot.com",
    messagingSenderId: "271592220715",
    appId: "1:271592220715:web:a267c3fca6fb2c1f4e626e",
    measurementId: "G-WM9E3SRPTP"
};

class Player{
    constructor(player, rounds, points, assists, saves, stuns){
        this.player = player
        this.rounds = rounds
        this.points = points
        this.assists = assists
        this.saves = saves
        this.stuns = stuns
    }
}

var Players = []
var j = 0

const Statbar = ({data}) => {
    return ( 
        <div className="statbar">
            {data.map((player) => (
                <div className="statbar-content">
                    <div className="statbar-content-n">{player.player}</div>
                    <div className="statbar-content-o">{player.rounds}</div>
                    <div className="statbar-content-o">{player.points}</div>
                    <div className="statbar-content-o">{player.assists}</div>
                    <div className="statbar-content-o">{player.saves}</div>
                    <div className="statbar-content-o">{player.stuns}</div>
                </div>
            ))}
        </div>
     );
}
 
export default Statbar;