import React, { Component } from 'react';
import GameCard from './GameCard'


const createGameCards = (games) => {
  console.log(games)
  return games.map((game) => {
    return (
      <GameCard
        key={ game.id }
        game={ game }
      />
    )
  })
}

const GameList = (props) => {
  const games = props.games;

  return (
    <div>
      <table>
        <thead>
          <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Size</th>
              <th>Description</th>
          </tr>
        </thead>
        <tbody>
          { createGameCards(games) }
        </tbody>
      </table>
    </div>
  )
}


export default GameList;
