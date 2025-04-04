import React, { useEffect, useState } from 'react';
import "./Second.css"
import TeamLeft from '../../components/Team/TeamLeft';
import TeamRight from '../../components/Team/TeamRight';
import { useLocation } from 'react-router-dom';

const SecondTempPage = () => {

    const location = useLocation();
    const groups = location.state?.groups || [];
    const [matchGroups, setMatchGroups] = useState([]);
    const [team1Marks, setTeam1Marks] = useState(0);
    const [team2Marks, setTeam2Marks] = useState(0);
    const [wonTeam1Team2, setWonTeam1Team2] = useState(null)

    useEffect(() => {

    }, [])

    const changeTeam1Marks = (mark) => {
        updateWinner({ team: groups[0][0], mark: parseInt(mark) }, { team: groups[0][1], mark: parseInt(team2Marks) })
        setTeam1Marks(mark)

    }

    const changeTeam2Marks = (mark) => {
        updateWinner({ team: groups[0][0], mark: parseInt(team1Marks) }, { team: groups[0][1], mark: parseInt(mark) })
        setTeam2Marks(mark)

    }

    const updateWinner = (team1, team2) => {
        if (team1.mark > team2.mark) {
            setWonTeam1Team2(team1.team)
        } else {
            setWonTeam1Team2(team2.team)
        }
    }

    return (
        <div className="bracket">

            <div className="column">

                {
                    [0, 1, 2, 3].map(element => {
                        return <>
                            <div className="match">
                                <TeamLeft  team={groups[element][0]} />
                            </div>
                            <div className="match">
                                <TeamLeft  team={groups[element][1]} />
                            </div>
                            <div className="match">
                                <TeamLeft team={groups[element][2]} />
                            </div>
                            <div className="match">
                                <TeamLeft team={groups[element][3]} />
                            </div></>
                    })
                }


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
                {
                    [4, 5, 6, 7].map(element => {
                        return <>
                            <div className="match">
                                <TeamLeft mark={team1Marks} setMarks={changeTeam1Marks} team={groups[element][0]} />
                            </div>
                            <div className="match">
                                <TeamLeft mark={team2Marks} setMarks={changeTeam2Marks} team={groups[element][1]} />
                            </div>
                            <div className="match">
                                <TeamLeft team={groups[element][2]} />
                            </div>
                            <div className="match">
                                <TeamLeft team={groups[element][3]} />
                            </div></>
                    })
                }
            </div>
        </div>
    )
}

export default SecondTempPage