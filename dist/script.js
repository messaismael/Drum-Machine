function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
const bank = [
{ id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
{ id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
{ id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
{ id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
{ id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
{ id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
{ id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
{ id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
{ id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav' }];




class DrumPad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleClick",


    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    });_defineProperty(this, "handleKeydown",



    event => {
      if (event.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
      }
    });}

  //Use the Lifecycle Method componentDidMount
  // handle the event press

  componentDidMount() {

    // displayed on the console
    console.log(this.audio);

    // add event press
    document.addEventListener("keydown", this.handleKeydown);
  }


  render() {

    return (

      React.createElement("div", { className: "drum-pad", id: this.props.id, onClick: this.handleClick },
      React.createElement("p", null,
      this.props.letter),

      React.createElement("audio", {
        className: "clip"
        // pass src, id as props in application component
        , src: this.props.src,
        id: this.props.letter
        // ref  this.audio with callback function
        , ref: ref => this.audio = ref })));




  }}



class Application extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",




    display => {this.setState({ display });});this.state = { display: "Display" };}
  render() {
    return (
      React.createElement("div", { id: "drum-machine" },

      React.createElement("div", { id: "display" }, " ", this.state.display),
      React.createElement("div", { id: "drum-pads" },

      // browse the table bank
      bank.map((b) =>
      React.createElement(DrumPad, {
        key: b.id,
        id: b.id,
        letter: b.letter,
        src: b.src,
        handleDisplay: this.handleDisplay }))),



      React.createElement("div", { style: { color: 'blue', width: 100, margin: "auto", fontSize: 20 } }, " ", React.createElement("a", { href: "https://github.com/messaismael", target: "_blank" }, " by Ismael"))));


  }}


ReactDOM.render(React.createElement(Application, null), document.getElementById("app"));