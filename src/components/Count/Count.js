import React from 'react'
import './Count.css'
import { incrementCounter } from '../../redux'
import { connect } from 'react-redux';

function Count(props) {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Count</h1>
      <h1 className="count-display">{props.count}</h1>
      <button className="count-button" onClick={props.incrementCounter}>Increment</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(incrementCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)