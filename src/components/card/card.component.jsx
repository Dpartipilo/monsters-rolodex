import React from 'react';
import './card.styles.css'

export const Card = props =>(
    <div  className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set180&size=180x150`} alt="robot"/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)