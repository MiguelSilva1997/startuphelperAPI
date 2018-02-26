import React from 'react';

const GameCard = (props) => {
  const game = props.game

  return (
      <tr>
        <td>{ game.date }</td>
        <td>{ game.time }</td>
        <td>{ game.size }</td>
        <td>{ game.notes }</td>
      </tr>
  )
}

export default GameCard;
