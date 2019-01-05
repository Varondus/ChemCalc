import * as React from "react";
import "./moa-input.css";

interface ImoaInputProps {
  value?: number;
  name: string;
}

interface ImoaInputState {
  value: number | string;
}

class MoaInput extends React.Component<ImoaInputProps, ImoaInputState> {
  constructor(props: any) {
    super(props);
    this.state = { value: 0 };
    this.takeValue = this.takeValue.bind(this);
  }

  takeValue(event: any) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.takeValue}>
          <label>Moles of acid(npk):
          <input className={'class. ' + this.props.name} onChange={this.takeValue}></input>
          </label>
        </form>
        {this.state.value}
      </div>
    );
  }
}

export default MoaInput;
