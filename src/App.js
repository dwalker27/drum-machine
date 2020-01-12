import React, { Component } from 'react';
import './App.css';

const snd = {
  'Q': {
    keyCode: 81,
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    text: "Q key pressed."},
  'W': {
    keyCode: 87,
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    text: "W key pressed."},
  'E': {
    keyCode: 69,
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    text: "E key pressed."},
  'A': {
    keyCode: 65,
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
  'S': {
    keyCode: 83,
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
  'D': {
    keyCode: 68,
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
  'Z': {
    keyCode: 90,
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
  'X': {
    keyCode: 88,
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
  'C': {
    keyCode: 67,
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}
  }; 
  
  class DrumPad extends Component {
    constructor (props) {
      super(props);
      this.playSound = this.playSound.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleKey = this.handleKey.bind(this);
    }
    componentDidMount() {
      document.addEventListener('keydown', this.handleKey);
    }
    handleClick(event) {
      this.playSound(event.target.id.slice(4));
    }
    handleKey(event) {
      for(let x in snd) {
        if (snd[x]['keyCode'] == event.keyCode) {
          this.playSound(x);
        }
      }
    }
    playSound(x) {
      let y = document.getElementById(x);
      document.getElementById("display").innerHTML = x + " key pressed.";
      y.play();
    }
    render() {
      let btnName = "key_" + this.props.btnKey
      return (
        <div>
          <button id={btnName} class="drum-pad" onClick={this.handleClick}>{this.props.btnKey}
          <audio id={this.props.btnKey} class="clip" src={snd[this.props.btnKey]['audio']}></audio>
        </button>
        </div>
      );
    }
  }
  
class Panel extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div id="beat-panel">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <DrumPad btnKey="Q" />
            </div>
            <div class="col-sm-4">
              <DrumPad btnKey="W" />
            </div>
            <div class="col-sm-4">
              <DrumPad btnKey="E" />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <DrumPad btnKey="A" />
            </div>
            <div class="col-sm-4">
              <DrumPad btnKey="S" />
            </div>
            <div class="col-sm-4">
              <DrumPad btnKey="D" />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <DrumPad btnKey="Z" />
            </div>
            <div class="col-sm-4">
              <DrumPad btnKey="X" />
            </div>
            <div class="col-sm-4">
              <DrumPad btnKey="C" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Display extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="display">Test</div>
    );
  }
}
  
class Drum extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="drum">
        <Panel />
        <Display />
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="drum-machine">
        <Drum />
      </div>
    );
  }
}

export default App;
