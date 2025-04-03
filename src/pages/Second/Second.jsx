import React from 'react';
import "./Second.css"
import TeamLeft from '../../components/Team/TeamLeft';
import TeamRight from '../../components/Team/TeamRight';

const SecondPage = () => {
  return (
    <div className="bracket">
      <div className="column">

        {
          Array.from({ length: 16 }, (_, index) => index + 1).map((element) => {
            return (
              <div className="match">
                <TeamLeft team={'A'} />
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
                <TeamLeft />
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
          Array.from({ length: 16 }, (_, index) => index + 1).map((element) => {
            return (
              <div className="match">
                <TeamRight />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SecondPage