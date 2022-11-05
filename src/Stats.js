import { setUncaughtExceptionCaptureCallback } from 'process';
import {useEffect, useState} from 'react';
import{initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs, query, where, onSnapshot, orderBy, doc, addDoc} from "firebase/firestore";
import Statbar from './Statbar.js'

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


var data = []
var j
var newPlayers = []
let d = 0
var sortedPlayers = 0


data = []
initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, 'Players');




const Stats = () => {

    const [dummy, setD] = useState(-5)
    const [c2, setc2] = useState('normal')
    const [c3, setc3] = useState('normal')
    const [c4, setc4] = useState('normal')
    const [c5, setc5] = useState('normal')
    const [c6, setc6] = useState('normal')
    const [Players, setPlayers] = useState([])


    

    useEffect(() =>{
    }, [Players])


    onSnapshot(colRef, (snapshot) => {
        data = []
        snapshot.docs.forEach((doc)=> {
            data.push({...doc.data(), id: doc.id})
        })


        if(Players == 0){
            setPlayers(() => initData())
        }

        setD(555)


    })

    const initData = () => {
        newPlayers = []
        var i = 0
        data.map((dset) => {
            i = 0
            newPlayers.map((player) =>{
                if(player.player == dset.player){
                    player.rounds = Number(player.rounds) + Number(dset.rounds)
                    player.points = Number(player.points) + Number(dset.points)
                    player.assists = Number(player.assists) + Number(dset.assists)
                    player.stuns = Number(player.stuns) + Number(dset.stuns)
                    player.saves = Number(player.saves) + Number(dset.saves)
                    i=1
                }
            })
            if(i==0){
        
                j = new Player(dset.player, dset.rounds, dset.points, dset.assists, dset.saves, dset.stuns)
                newPlayers.push(j)
            }
        })
        return newPlayers
    }


    const sortStats = (n) => {
        sortedPlayers = Players.sort((a,b) => (
            (Number(a[n]) < Number(b[n])) ? 1 : (Number(a[n]) > Number(b[n])) ? -1 : 0
        ))
        setPlayers(sortedPlayers)
    }  


    const handleClick = (n) => {
        setc2('normal')
        setc3('normal')
        setc4('normal')
        setc5('normal')
        setc6('normal')

        switch(n){
            case 'c2': sortStats('rounds')
            setc2('italic')
            break;
            case 'c3': sortStats('points')
            setc3('italic')
            break;
            case 'c4': sortStats('assists')
            setc4('italic')
            break;
            case 'c5': sortStats('saves')
            setc5('italic')
            break;
            case 'c6': sortStats('stuns')
            setc6('italic')
            break;
        }

    }

    return(

        <div className="stats">
            <h2>Player Stats</h2>
            <div className="stats-container">
                <div className="stats-header">
                    <div className="stats-header-catn">Player Name</div>
                    <div className="stats-header-cat" style={{fontStyle: c2}} onClick={() => handleClick('c2')}>Rounds</div>
                    <div className="stats-header-cat" style={{fontStyle: c3}} onClick={() => handleClick('c3')}>Points</div>
                    <div className="stats-header-cat" style={{fontStyle: c4}} onClick={() => handleClick('c4')}>Assists</div>
                    <div className="stats-header-cat" style={{fontStyle: c5}} onClick={() => handleClick('c5')}>Saves</div>
                    <div className="stats-header-cat" style={{fontStyle: c6}} onClick={() => handleClick('c6')}>Stuns</div>
                </div>
                <div className="stats-list">
                    { Players.map((player) => (
                        <div className="statbar">
                            <div className="statbar-content-n">{player.player}</div>
                            <div className="statbar-content-o">{player.rounds}</div>
                            <div className="statbar-content-o">{player.points}</div>
                            <div className="statbar-content-o">{player.assists}</div>
                            <div className="statbar-content-o">{player.saves}</div>
                            <div className="statbar-content-o">{player.stuns}</div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
        
    );

}
export default Stats;