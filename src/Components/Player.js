import React from 'react'
import { useState } from 'react'

const Player = ({name,symbol}) => {
    const[isEditing,setIsEditing]=useState(false)

    function handleEditclick(){
        setIsEditing((editing)=>!editing);
    }
        let playerName =  <span className="player-name">{name}</span>;

        if(isEditing) {
            playerName=<input type="text" required value={name}/>;
    }


    
  return (
    <li>
    <span className="player">
        {playerName}
      <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditclick}>{isEditing ? 'save' : 'edit'}</button>
  </li>  
  )
}

export default Player