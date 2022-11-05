const GameList = ({match}) => {
    return ( 
        <div className = "gamelist-container">
            <div className="gamelist-main">
                <div className="gamelist-t1">
                    <div className="gamelist-t1name">{match.t1name}</div>
                    <div className="gamelist-score">{match.t1rounds}</div>
                </div>
                <div className="gamelist-t2">
                    <div className="gamelist-t2name">{match.t2name}</div>
                    <div className="gamelist-score">{match.t2rounds}</div>
                </div>
            </div>
            <div className="gamelist-sub">
                <div className="gamelist-rscores">
                    <div className="gamelist-t1score">{match.t1r1score}</div>
                    <div className="gamelist-vs">-</div>
                    <div className="gamelist-t2score">{match.t2r1score}</div>
                </div>
                <div className="gamelist-rscores">
                    <div className="gamelist-t1score">{match.t1r2score}</div>
                    <div className="gamelist-vs">-</div>
                    <div className="gamelist-t2score">{match.t2r2score}</div>
                </div>
                <div className="gamelist-rscores">
                    <div className="gamelist-t1score">{match.t1r3score}</div>
                    <div className="gamelist-vs">-</div>
                    <div className="gamelist-t2score">{match.t2r3score}</div>
                </div>
            </div>
        </div>



     );
}
 
export default GameList;