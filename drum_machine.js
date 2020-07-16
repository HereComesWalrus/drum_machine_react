'use strict';

const e = React.createElement;

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.audio = new Audio(props.audio_url)
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentDidUnMount() {
    document.addEventListener('keydown', this.handleKeyPressStop);
  }

  handleKeyPress = (event) => {
    if (event.code == 'Key'+this.props.button_text){
      this.audio.play()
    }

  }
  handleKeyPressStop = (event) => {
    if (event.code == 'Key'+this.props.button_text){
        this.audio.pause()
    }

  }

  render() {
    return e(
      'button',
      { tabIndex:'0',
        onClick: () => {this.audio.play()},
        onKeyDown: this.handleKeyPress,
        style:  {width:'50px', height:'50px'}
      }, this.props.button_text

    );
  }
}

var domContainer = document.querySelector('#drum_machine_container');
ReactDOM.render(e(DrumMachine,{audio_url: "samples/kick.wav", button_text:'Q'}), domContainer);

domContainer = document.querySelector('#drum_machine_container2');
ReactDOM.render(e(DrumMachine,{audio_url: "samples/clap.wav", button_text:'W'},''), domContainer);

domContainer = document.querySelector('#drum_machine_container3');
ReactDOM.render(e(DrumMachine,{audio_url: "samples/closed_hat.wav", button_text:'E'}), domContainer);

domContainer = document.querySelector('#drum_machine_container4');
ReactDOM.render(e(DrumMachine,{audio_url: "samples/crazy1.wav", button_text:'A'}), domContainer);

domContainer = document.querySelector('#drum_machine_container5');
ReactDOM.render(e(DrumMachine,{audio_url: "samples/crazy2.wav", button_text:'S'}), domContainer);

domContainer = document.querySelector('#drum_machine_container6');
ReactDOM.render(e(DrumMachine,{audio_url: "samples/crazy3.wav", button_text:'D'}), domContainer);
