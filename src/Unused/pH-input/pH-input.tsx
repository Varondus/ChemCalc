import * as React from "react";
import "./pH-input.css";

interface IPhInputProps {
  name: string;
  pH: number;
}

interface IPhInputState {
  value: number | string;
}
class PhInput extends React.Component<IPhInputProps, IPhInputState> {
  constructor(props: any) {
    super(props);
    this.state = { value: 0 };
    this.takeValue = this.takeValue.bind(this);
  }

  takeValue(event: any) {
    this.setState({ value: event.target.value });
  }

  render() {
    const pH = this.state.value;
    return (
      <div>
        <form onSubmit={this.takeValue}>
          <label>
            pH:
            <input
              className={"class. " + this.props.name}
              onChange={this.takeValue}
              value={pH}
            />
          </label>
          {pH}
          <button type="button" className="SubmitButton" name="Submit">
            Oblicz!
          </button>
        </form>
      </div>
    );
  }
}

export default PhInput;
