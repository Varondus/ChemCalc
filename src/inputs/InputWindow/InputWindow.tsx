import * as React from "react";
import "./InputWindow.css";

interface IInputWindowProps {
  name: string;
  value: number;
  onChange?: any
}

interface IInputWindowState {
  value: number | null;
}
class InputWindow extends React.Component<IInputWindowProps, IInputWindowState> {
  constructor(props: any) {
    super(props);
    this.state = {value: null};
    this.takeValue = this.takeValue.bind(this);
  }

  takeValue(e: any) {
    this.props.onChange(e.target.value);
    this.setState({ value: e.target.value })
  }

  render() {
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
        </form>
      </div>
    );
  }
}

export default InputWindow;
