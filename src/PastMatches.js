import { useState, useEffect } from "react";
import GameList from './GameList.js';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, onSnapshot, orderBy, doc  } from "firebase/firestore";

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
var matches = []
const colRef = collection(db, 'Games');





const PastMatches = () => {

    useEffect(() => {

    }, [])

    const [a, setA] = useState('a')
    
    const q = query(colRef, where("status", "==", "past"))
    onSnapshot(q, (snapshot) => {
        matches = []
        snapshot.docs.forEach((doc)=> {
            matches.push({...doc.data(), id: doc.id})
        })
        setA('b')

    })  

    
    return ( 
        <div className="home">
            <h2>Team Awaken Matches</h2>
            <div className="matches-container">
                {matches.map((match) => (
                    <GameList match = {match}></GameList>
                ))}
            </div>

        </div>
     );
}
 
export default PastMatches;