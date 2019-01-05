import * as React from "react";
import "./mob-input.css";

interface ImobInputProps {
  value?: number;
  name: string;
}

interface ImobInputState {
  value: number | string;
}

class MobInput extends React.Component<ImobInputProps, ImobInputState> {
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
          <label>Moles of base(npz):
          <input className={'class. ' + this.props.name} onChange={this.takeValue}></input>
          </label>
        </form>
        {this.state.value}
      </div>
    );
  }
}

export default MobInput;
