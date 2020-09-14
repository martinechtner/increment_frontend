import React, {useEffect, useState} from 'react'

import IncrementService from "../Services/increment.service";

const Increment = (props) => {
  const [current, setCurrent] = useState("")
  const [resetCurrent, setResetCurrent] = useState("")

  useEffect(() => {
    IncrementService.current().then(
      (resp) => {
        setCurrent(resp.data.current)
      }
    )
  })

  const handleIncrement = (evt) => {
    evt.preventDefault()
    IncrementService.increment().then(
      (resp) => {
        setCurrent(resp.data.current)
      }
    )
  }

  const handleResetCurrentChange = (e) => {
    setResetCurrent(e.target.value)
  }

  const handleReset = (evt) => {
    evt.preventDefault()
    IncrementService.reset(resetCurrent).then(
      (resp) => {
        setCurrent(resp.data.current)
      }
    )
  }

  return (
    <div>
      <div className="row">
        <div className="col-4">Current Increment: <strong>{current}</strong></div>
      </div>

      <div className="row mt-5">
        <div className="col-4">
          <form className="form" onSubmit={handleIncrement}>
            <div className="form-group">
              <button className="btn btn-primary btn-block">Increment</button>
            </div>
          </form>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-4">
          <form className="form" onSubmit={handleReset}>
            <div className="form-group">
              <input className="form-control"
                     value={resetCurrent}
                     onChange={handleResetCurrentChange}
                     placeholder="Reset current value"/>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block">Reset Current</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Increment