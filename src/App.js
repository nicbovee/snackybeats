import React from 'react';
import logo from './logo.svg';
import './App.css';

const pads = {
  Q: {
   id: "Clap",
   file: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/16[kb]Bg-clap.wav.mp3"
  },
  W: {
   id: "Kick",
   file: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/16[kb]808bd.aif.mp3"
  },
  E: {
   id: "Snare",
  file: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/57[kb]acoustic_snare.aif.mp3"
},
A: {
   id: "Rim",
   file: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/23[kb]badrim.aif.mp3"
  },
  S: {
    id: "Ride",
    file: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/87[kb]cleanride.aif.mp3"
  },
  D: {
    id: "SpaceTom",
    file: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/89[kb]giant-electrotom.aif.mp3"
  },
  Z: {
    id: "GhostTom",
    file: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/339[kb]ambient_tom_3.aif.mp3"
  },
  X: {
    id: "Dweeeee",
    file: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Voice/36[kb]dwee.aif.mp3"
  },
  C: {
    id: "Hooh",
    file: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Voice/38[kb]hoo.wav.mp3"
  },
}

// const handleKeyPress = (event) => {
//   if(event.key === key) {
//   }
//   alert(`You pressed ${event.key}`)  

// }





const DrumPad = (props) => {
  return <div className="drum-pad" id={props.id}  onClick={props.onClick}>{props.letter}
    <audio className="clip" id={props.letter} src={props.file} type="audio/mp3"></audio>
        </div> 
}

 
  

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {active: ""}
  
  }

  playSound = (key) => {
    if(pads[key.toUpperCase()]){
      const goodAudio = new Audio(pads[key.toUpperCase()].file);
      this.setState({active:pads[key.toUpperCase()].id});
      goodAudio.play();
      setTimeout(() => this.setState({active:''}), 100)
    }
  }
  handleKey = (e) => {
    this.playSound(e.key);
  }
  componentDidMount(){
  
   document.addEventListener("keydown", this.handleKey);
  }
  render(){
    return(
    <div className="app">
      <div id="display" style={{color: "#000"}}>{this.state.active}</div>
      <div className="wrapper">
        {Object.keys(pads).map(x => <DrumPad id={pads[x].id} letter={x} onClick={() => this.playSound(x)} file={pads[x].file} />)}
      </div>   
    </div>
  )
  }
  
}


export default App;
