import React from 'react'
import { connect } from 'react-redux';
import { CHANGE_CLICKSTATE } from './redux/actionTypes';

const mapStateToProps = (state) => {
  return { clickstate: state.clickstate }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeClickState: () => dispatch( {type: CHANGE_CLICKSTATE} )
  }
}

class App extends React.Component {
  renderDynamicText(){
    const currentClickState = this.props.clickstate ? 'Clicked on :-)' : 'Clicked off :-(';
    return (
      <p>{currentClickState}</p>
    );
  }

  renderButton(){
    const buttonText = 'Click me to change the sentence above me!';
    return (
      <button onClick={this.props.changeClickState}>{buttonText}</button>
    )
  }

  render(){
    return (
      <>
        <p>Welcome to the LiquidHealth web redesign! We decided our website needed a redo.</p>
        {this.renderDynamicText()}
        {this.renderButton()}
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
