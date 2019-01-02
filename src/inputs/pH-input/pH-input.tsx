import * as React from "react"
import "./pH-input.css"


interface IPhInputProps {
  value?: number;
  name: string;
}

interface IPhInputState {
  value: number | string;
}


class PhInput extends React.Component<IPhInputProps, IPhInputState> {
  constructor(props: any) {
    super(props)
    this.state = { value: 0 };
    this.takeValue = this.takeValue.bind(this);
  };

  takeValue(event: any) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <input className="inputWindow" type="text" />
        <form onSubmit={this.takeValue}>
          <label>pH:
          <input className="inputWindow" onChange={this.takeValue}></input>
          </label>
          <button type="button" className="SubmitButton" value={this.state.value} name="Submit" >Oblicz!</button>
        </form>
        {this.state.value}
      </div>
    );
  }
}


export default PhInput;