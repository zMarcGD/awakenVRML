import { setUncaughtExceptionCaptureCallback } from 'process';
import {useState} from 'react';
import{initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs, query, where, onSnapshot, orderBy, doc, addDoc} from "firebase/firestore"
import {statbar} from './Statbar.js'


const firebaseConfig = {
    apiKey: "AIzaSyAzntZTDwZlyqIqCgjOGHgIkXudP_yFdx4",
    authDomain: "awakenstatsv2.firebaseapp.com",
    projectId: "awakenstatsv2",
    storageBucket: "awakenstatsv2.appspot.com",
    messagingSenderId: "271592220715",
    appId: "1:271592220715:web:a267c3fca6fb2c1f4e626e",
    measurementId: "G-WM9E3SRPTP"
  };

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, 'Players');

const colRef2 = collection(db, "Games")



const Updatedb = () => {

    const [rounds, setRounds] = useState('');
    const [points, setPoints] = useState('');
    const [assists, setAssists] = useState('');
    const [saves, setSaves] = useState('');
    const [stuns, setStuns] = useState('');
    const [player, setPlayer] = useState('');

    const [t1name, setT1name] = useState('')
    const [t2name, setT2name] = useState('')
    const [t1rounds, setT1rounds] = useState('')
    const [t2rounds, setT2rounds] = useState('')
    const [t1r1score, setT1r1score] = useState('')
    const [t1r2score, setT1r2score] = useState('')
    const [t1r3score, setT1r3score] = useState('')
    const [t2r1score, setT2r1score] = useState('')
    const [t2r2score, setT2r2score] = useState('')
    const [t2r3score, setT2r3score] = useState('')

    const handleSubmitP = (e) => {
        e.preventDefault();
        addDoc(colRef, {
            rounds: rounds,
            points: points,
            assists: assists,
            saves: saves,
            stuns: stuns,
            player: player,
        })

        
    }

    const handleSubmitM = (e) => {
        e.preventDefault();
        addDoc(colRef2, {
            status: 'past',
            t1name: t1name,
            t2name: t2name,
            t1rounds: t1rounds,
            t2rounds: t2rounds,
            t1r1score: t1r1score,
            t1r2score: t1r2score,
            t1r3score: t1r3score,
            t2r1score: t2r1score,
            t2r2score: t2r2score,
            t2r3score: t2r3score,
        })
    }

    return(
        <div className="Updatedb">
            <h2>Add new player</h2>
            <form action="">
                <label htmlFor="">Player:</label>
                <input type="text" value={player} onChange={(e) => setPlayer(e.target.value)}/>
                <label htmlFor="">Rounds:</label>
                <input type="text" value={rounds} onChange={(e) => setRounds(e.target.value)}/>
                <label htmlFor="">Points:</label>
                <input type="text" value={points} onChange={(e) => setPoints(e.target.value)}/>
                <label htmlFor="">Assists:</label>
                <input type="text" value={assists} onChange={(e) => setAssists(e.target.value)}/>
                <label htmlFor="">Saves:</label>
                <input type="text" value={saves} onChange={(e) => setSaves(e.target.value)}/>
                <label htmlFor="Stuns">Stuns</label>
                <input type="text" value={stuns} onChange={(e) => setStuns(e.target.value)}/>
                <button onClick={handleSubmitP}>Submit!</button>
            </form>
            <h2>Add new match</h2>
            <form action="">
                <label htmlFor="">t1name</label>
                <input type="text" value={t1name} onChange={(e) => setT1name(e.target.value)}/>
                <label htmlFor="">t2name</label>
                <input type="text" value={t2name} onChange={(e) => setT2name(e.target.value)}/>
                <label htmlFor="">t1rounds</label>
                <input type="text" value={t1rounds} onChange={(e) => setT1rounds(e.target.value)}/>
                <label htmlFor="">t2rounds</label>
                <input type="text" value={t2rounds} onChange={(e) => setT2rounds(e.target.value)}/>
                <label htmlFor="">t1r1score</label>
                <input type="text" value={t1r1score} onChange={(e) => setT1r1score(e.target.value)}/>
                <label htmlFor="">t1r2score</label>
                <input type="text" value={t1r2score} onChange={(e) => setT1r2score(e.target.value)}/>
                <label htmlFor="">t1r3score</label>
                <input type="text" value={t1r3score} onChange={(e) => setT1r3score(e.target.value)}/>
                <label htmlFor="">t2r1score</label>
                <input type="text" value={t2r1score} onChange={(e) => setT2r1score(e.target.value)}/>
                <label htmlFor="">t2r2score</label>
                <input type="text" value={t2r2score} onChange={(e) => setT2r2score(e.target.value)}/>
                <label htmlFor="">t2r3score</label>
                <input type="text" value={t2r3score} onChange={(e) => setT2r3score(e.target.value)}/>
                <button onClick={handleSubmitM}>submit!</button>
            </form>
        </div>
    );
}

export default Updatedb;