import React from 'react';
import ReactDOM from 'react-dom';

export default class Basic extends React.Component{

constructor(){
super();
this.state = {'name':'reactstateex'};
this.check1=this.check1.bind(this);
}
check1()
{
return this.state.name;
}


render(){
return(
<h1>Hello from React
{this.check1()}</h1>

);
}

}


ReactDOM.render(<Basic />,document.getElementById("start"));
