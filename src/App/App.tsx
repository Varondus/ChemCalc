import React from "react";
import InputWindow from "../inputs/InputWindow/InputWindow";
import "./App.css";

interface IAppProps {}
interface IAppState {
  pH: number | string;
  MoA: number | string;
  MoB: number | string;
  pKa: number | string;
  value?: number | string;
}

export class App extends React.Component<IAppProps, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
        pH: 0,
        MoA: 0,
        MoB: 0,
        pKa: 0,
        value: 0
        };
        this.updatepH = this.updatepH.bind(this);
        this.updateMoA = this.updateMoA.bind(this);
        this.updateMoB = this.updateMoB.bind(this);
        this.updatepKa = this.updatepKa.bind(this);
    }

//  event handlers for input windows

    updatepH(pH: number) {
      this.setState({pH});
    }
    updateMoA(MoA: number) {
        this.setState({MoA});
    }
    updateMoB(MoB: number) {
        this.setState({MoB});
    }
    updatepKa(pKa: number) {
        this.setState({pKa});
    }

    calculator(p1: number) {
    return Math.pow(10, -p1);
    }

    // render 
    render() {
    const pH = this.state.pH;
    const MoA = this.state.MoA;
    const MoB = this.state.MoB;
    const pKa = this.state.pKa;
    return (
      <div>
        <InputWindow name="pH" value={pH} onChange={this.updatepH} />
        <InputWindow name="MoA" value={MoA} onChange={this.updateMoA} />
        <InputWindow name="MoB" value={MoB} onChange={this.updateMoB} />
        <InputWindow name="pKa" value={pKa} onChange={this.updatepKa} />
      </div>
    );
  }
}
