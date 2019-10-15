/*jshint esversion: 6*/
import React,{ Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import Rank from '../components/Rank/Rank';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
 apiKey: "76415aea46684cd9af84241b31da640c"
});
const paramsOptions={
  particles: {
    number: {
      value: 240,
      density: {
        enable: true,
        value_area: 800
      }
      }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
    },
    modes:{
    repulse: {
        distance: 150,
        duration: 0.7
      }
    }
  }
};

class App extends Component{
  constructor(){
    super();
    this.state={
      input:'',
      imgUrl:'',
      box:{},
      route:'signIn',
      isSignedIn: false
    }
  }
  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }
  calculateFaceLocation=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('inputImage');
    const imgWidth=Number(image.width);
    const imgHeight=Number(image.height);
    return{
      leftCol: clarifaiFace.left_col * imgWidth,
      rightCol: imgWidth-(clarifaiFace.right_col * imgWidth),
      topRow: clarifaiFace.top_row * imgHeight,
      bottomRow: imgHeight-clarifaiFace.bottom_row * imgHeight,

    }
  }
  displayBoxFace=(box)=>{
    console.log(box);
    this.setState({box:box});
  }
  onButtonSumbit=()=>{
    this.setState({imgUrl:this.state.input});
    console.log('click');
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response=>this.displayBoxFace(this.calculateFaceLocation(response)))
    .catch(err=>console.log(err))
}
onChangeRoute=(route)=>{
  if(route==='home'){
    this.setState({isSignedIn:true})
  }else if(route==='signIn'){
    this.setState({isSignedIn:false})
  }
  this.setState({route: route});
}
  render() {
    const {isSignedIn,route,box,imgUrl} = this.state;
    return(
      <div className="App">
        <Particles className='particules'
                params={paramsOptions}

              />
      <Navigation onChangeRoute={this.onChangeRoute} isSignedIn={isSignedIn}/>
      {route==='home'
      ?<div>
      <Logo/>
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSumbit={this.onButtonSumbit}/>
      <FaceRecognition  imgUrl={imgUrl} box={box}/>
      </div>
      :(
        route==='signIn'
        ?<SignIn onChangeRoute={this.onChangeRoute}/>
        :<Register onChangeRoute={this.onChangeRoute}/>
      )
      
      
    }

      </div>
    )

  }

}

export default App;
