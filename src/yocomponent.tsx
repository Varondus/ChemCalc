import * as React from 'react'

interface IYoProps {
  name: string;
}

interface IYoState{
  count: number;
}

class YoComponent extends React.Component<IYoProps, IYoState>{
  constructor(props:any){
    super(props);
    this.state = { count: 0 };
  }
  render(){
    return <button onClick={ this.increaseCounter} >
             <p>Current count: { this.state.count }</p>
           </button>;
    };
  increaseCounter(){
    this.setState({ count: this.state.count +1 })
  }
}

export default YoComponent