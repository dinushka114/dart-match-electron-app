import React from 'react'

const TeamRight = ({team}) => {
  return (
    <>
          {/* <div className="line"></div> */}
        <input type="number" className="score-input border-2 border-gray-600  rounded-lg bg-gray-700 text-white font-serif placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" id="scoreA" onChange="updateWinnerAB()" />
        <div className="team px-2 py-1 bg-gradient-to-r from-yellow-700 to-yellow-500 text-white font-serif border-4 border-brown-800 rounded-lg hover:scale-105 hover:shadow-lg transform transition-all ">{team}</div>
    
    </>
  )
}

export default TeamRight