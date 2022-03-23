import React from 'react'
import './Count.css'
import { incrementCounter, decrementCounter } from '../../redux'
import { connect } from 'react-redux';

function Count(props) {
  // const [countInput, setCountInput] = useState(0)
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Count</h1>
      <h1 className="count-display">{props.count}</h1>
      {/* <input type="number" className="count-input" value={countInput} onChange={(e) => setCountInput(Number(e.target.value))} /> */}
      <button className="count-button" onClick={() => props.incrementCounter()}>Increment</button>
      <button className="count-button" onClick={() => props.decrementCounter()}>Decrement</button> <br />
      <button className="count-button" onClick={() => props.incrementCounter(3)}>Increment 3</button>
      <button className="count-button" onClick={() => props.decrementCounter(3)}>Decrement 3</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: (countInput) => dispatch(incrementCounter(countInput)),
    decrementCounter: (countInput) => dispatch(decrementCounter(countInput))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)