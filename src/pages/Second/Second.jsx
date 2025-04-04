import React, { useEffect, useState } from 'react';
import "./Second.css"
import TeamLeft from '../../components/Team/TeamLeft';
import TeamRight from '../../components/Team/TeamRight';
import { useLocation } from 'react-router-dom';

const SecondPage = () => {

  const location = useLocation();
  const groups = location.state?.groups || [];
  const [matchGroups, setMatchGroups] = useState([]);
  const [team1Marks, setTeam1Marks] = useState(0);
  const [team2Marks, setTeam2Marks] = useState(0);
  const [wonTeam1Team2, setWonTeam1Team2] = useState(null)

  useEffect(() => {

  }, [])

  const changeTeam1Marks = (mark) => {
    updateWinner({team:groups[0][0], mark:parseInt(mark)},{team:groups[0][1], mark:parseInt(team2Marks)})
    setTeam1Marks(mark)

  }

  const changeTeam2Marks = (mark) => {
    updateWinner({team:groups[0][0], mark:parseInt(team1Marks)},{team:groups[0][1], mark:parseInt(mark)})
    setTeam2Marks(mark)

  }

  const updateWinner = (team1, team2) => {
    if(team1.mark>team2.mark){
      setWonTeam1Team2(team1.team)
    }else{
      setWonTeam1Team2(team2.team)
    }
  }

  return (
    <div className="bracket">

      <div className="column">
        {/* GROUP ONE */}

        <div className="match">
          <TeamLeft mark={team1Marks} setMarks={changeTeam1Marks} team={groups[0][0]} />
        </div>
        <div className="match">
          <TeamLeft mark={team2Marks} setMarks={changeTeam2Marks} team={groups[0][1]} />
        </div>
        <div className="match">
          <TeamLeft team={groups[0][2]} />
        </div>
        <div className="match">
          <TeamLeft team={groups[0][3]} />
        </div>

        {/* END GROUP ONE */}

        {/* GROUP TWO */}

        <div className="match">
          <TeamLeft team={groups[1][0]} />
        </div>
        <div className="match">
          <TeamLeft team={groups[1][1]} />
        </div>
        <div className="match">
          <TeamLeft team={groups[1][2]} />
        </div>
        <div className="match">
          <TeamLeft team={groups[1][3]} />
        </div>

        {/* END GROUP TWO */}

        {/* GROUP THREE */}

        <div className="match">
          <TeamLeft team={groups[2][0]} />
        </div>
        <div className="match">
          <TeamLeft team={groups[2][1]} />
        </div>
        <div className="match">
          <TeamLeft team={groups[2][2]} />
        </div>
        <div className="match">
          <TeamLeft team={groups[2][3]} />
        </div>

        {/* END GROUP THREE */}

        {/* GROUP FOUR */}

        <div className="match">
          <TeamLeft team={groups[3][0]} />
        </div>
        <div className="match">
          <TeamLeft team={groups[3][1]} />
        </div>
        <div className="match">
          <TeamLeft team={groups[3][2]} />
        </div>
        <div className="match">
          <TeamLeft team={groups[3][3]} />
        </div>

        {/* END GROUP FOUR */}



      </div>

      <div className="column">
        {
          Array.from({ length: 8 }, (_, index) => index + 1).map((element) => {
            return (
              <div className="match">
                <TeamLeft team={wonTeam1Team2} />
              </div>
            )
          })
        }
      </div>

      <div className="column">
        {
          Array.from({ length: 4 }, (_, index) => index + 1).map((element) => {
            return (
              <div className="match">
                <TeamLeft />
              </div>
            )
          })
        }
      </div>

      {/* final */}

      <div className="column">
        <div className="match">
          <TeamLeft />

        </div>
        <div className="match">
          <TeamLeft />

        </div>
      </div>

      <div className="column">
        <div className="match">
          <TeamLeft />

        </div>
      </div>

      {/* Champion */}

      {/* <div className="column">
        <div className="match">
          Champion
        </div>

      </div> */}

      {/* Champion */}

      <div className="column">
        <div className="match">
          <TeamRight />

        </div>
      </div>

      <div className="column">
        <div className="match">
          <TeamRight />

        </div>
        <div className="match">
          <TeamRight />

        </div>
      </div>

      {/* final */}

      <div className="column">
        {
          Array.from({ length: 4 }, (_, index) => index + 1).map((element) => {
            return (
              <div className="match">
                <TeamRight />
              </div>
            )
          })
        }
      </div>

      <div className="column">
        {
          Array.from({ length: 8 }, (_, index) => index + 1).map((element) => {
            return (
              <div className="match">
                <TeamRight />
              </div>
            )
          })
        }
      </div>

      <div className="column">
        {/* GROUP ONE */}

        <div className="match">
          <TeamRight team={groups[4][0]} />
        </div>
        <div className="match">
          <TeamRight team={groups[4][1]} />
        </div>
        <div className="match">
          <TeamRight team={groups[4][2]} />
        </div>
        <div className="match">
          <TeamRight team={groups[4][3]} />
        </div>

        {/* END GROUP ONE */}

        {/* GROUP TWO */}

        <div className="match">
          <TeamRight team={groups[5][0]} />
        </div>
        <div className="match">
          <TeamRight team={groups[5][1]} />
        </div>
        <div className="match">
          <TeamRight team={groups[5][2]} />
        </div>
        <div className="match">
          <TeamRight team={groups[5][3]} />
        </div>

        {/* END GROUP TWO */}

        {/* GROUP THREE */}

        <div className="match">
          <TeamRight team={groups[6][0]} />
        </div>
        <div className="match">
          <TeamRight team={groups[6][1]} />
        </div>
        <div className="match">
          <TeamRight team={groups[6][2]} />
        </div>
        <div className="match">
          <TeamRight team={groups[6][3]} />
        </div>

        {/* END GROUP THREE */}

        {/* GROUP FOUR */}

        <div className="match">
          <TeamRight team={groups[7][0]} />
        </div>
        <div className="match">
          <TeamRight team={groups[7][1]} />
        </div>
        <div className="match">
          <TeamRight team={groups[7][2]} />
        </div>
        <div className="match">
          <TeamRight team={groups[7][3]} />
        </div>

        {/* END GROUP FOUR */}
      </div>
    </div>
  )
}

export default SecondPage