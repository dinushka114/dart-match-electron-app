import React from 'react'
import { useLocation } from 'react-router-dom';

const SecondPage = () => {


    const location = useLocation();
    const groups = location.state?.groups || [];

    return (
        <div className='bracket'>
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
                    [4, 5, 6, 7].map(element => {
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
        </div>
    )
}

export default SecondPage