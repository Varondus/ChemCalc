import * as React from "react";
import "./InputWindow.css";

interface IInputWindowProps {
  name: string;
  value: number | string;
  onChange?: any
}

interface IInputWindowState {
  value: number | string;
}
class InputWindow extends React.Component<IInputWindowProps, IInputWindowState> {
  constructor(props: any) {
    super(props);
    this.state = { value: 0 };
    this.takeValue = this.takeValue.bind(this);
  }

  takeValue(e: any) {
    this.props.onChange(e.target.value);
    this.setState({ value: e.target.value })
  }

  render() {
    const inputValue = this.props.value
    return (
      <div>
        <form>

          <label>
            {this.props.name} :
            <input
              className={"class. " + this.props.name}
              onChange={this.takeValue}
            />
          </label>

          <button type="button" className="SubmitButton" name="Submit">
            Oblicz!
          </button>
        </form>
      </div>
    );
  }
}

export default InputWindow;
