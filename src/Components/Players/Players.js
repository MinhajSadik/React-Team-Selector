import React, { useEffect, useState } from 'react';
import playerData from '../../PlayersData/playersData';
import Player from '../Player/Player';
import './Players.css'

const Players = props => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(playerData);
    }, []);
    return (
        <div className="row g-4">
            {players.map(player => (
                <Player addToCartHandler={props.addToCartHandler} 
                key={player.id} player={player}></Player>

                
            ))}
        </div>
    );
};

export default Players;
