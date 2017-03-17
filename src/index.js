import React from 'react';
import ReactDOM from 'react-dom';

export default class Basic extends React.Component{

constructor(){
super();
this.state = {
         Seconds: 0,
         Minutes : 2
      }
      var x=0;
      this.setNewNumber = this.setNewNumber.bind(this);
      this.setNewNumber2 = this.setNewNumber2.bind(this);
      this.setNewNumber3 =this.setNewNumber3.bind(this);
}



setNewNumber(e){
e.target.style.display='none';
this.x=setInterval(()=>{
  this.state.Seconds=this.state.Seconds-1;
  var min=this.state.Minutes;
  var sec=this.state.Seconds;
  if(this.state.Minutes==0&&this.state.Seconds==0){
    clearInterval(this.x);
    console.log(this.state.Minutes+"ha");
    min = -1;
  }
  if(this.state.Seconds<0){
    //this.setState({Minutes:this.state.Minutes-1,Seconds:59})
    min=min-1;
    sec=59;
  }

  this.setState({Seconds : sec,Minutes:min});
},100);
  //this.setState({data : this.state.data-1},()=>setTimeout(this.setNewNumber,100));

}
setNewNumber2(){
  clearInterval(this.x);
  this.setState({Minutes:-1});
  console.log("im hari");
}
setNewNumber3()
{
  this.setState({Minutes:2,Seconds:0});
}

componentWillUnmount() {
   console.log('Component WILL UNMOUNT!')
}
render()
{

  var min=this.state.Minutes;
  console.log(min+"muni");
  if(min<0){
    return(
      <div className="container">
      <h1>Bye</h1>
      <div className="col-lg-4"><button type="button" className= "btn btn-warning btn-md col-lg-8" onClick = {this.setNewNumber3}>Playagain</button></div>
      </div>
    )
  }

  var sec=this.state.Seconds;
console.log(sec+"j");
  if(sec<10){
    sec="0"+sec;
  }
  return(
    <div className="container h">
    <div className="row">
    <div className="col-lg-4">
      <button type="button" className="btn btn-success btn-md " style={{display:'block'}} onClick = {this.setNewNumber}>Start</button>
      </div>
      <div className="col-lg-4" id="time"><h1>{min}:{sec}</h1></div>
      <div className="col-lg-4"><button type="button" className= "btn btn-warning btn-md col-lg-4" onClick = {this.setNewNumber2}>End</button></div>
      <br></br>
</div>

      </div>
  );
}

}


ReactDOM.render(<Basic/>,document.getElementById("app"));
