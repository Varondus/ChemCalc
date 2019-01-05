import React from "react";
import InputWindow from "../inputs/InputWindow/InputWindow";
import "./App.css";

interface IAppProps {}
interface IAppState {
    pH: number;
    MoA: number;
    MoB: number;
    pKa: number;
    value?: number
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
        this.calculate = this.calculate.bind(this)
    }

//  event handlers for input windows, console logs are for development purposes only

    updatepH(pH: number) {
        this.setState({pH});
        console.log(pH * 2)
    }
    updateMoA(MoA: number) {
        this.setState({MoA});
        console.log(MoA * 2)
    }
    updateMoB(MoB: number) {
        this.setState({MoB});
        console.log(MoB * 2)
    }
    updatepKa(pKa: number) {
        this.setState({pKa});
        console.log(pKa * 2)
    }

    calculator(p1: number) {
    return Math.pow(10, -p1);
    }
    calculate(event: React.FormEvent<HTMLButtonElement>) {
        const calculatedPH = Math.round((this.state.pKa - Math.log10(this.state.MoA / this.state.MoB)) * 100) / 100;
        this.setState({ pH: calculatedPH});
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
        <button className="SubmitButton" name="Submit" onClick={this.calculate}>
            Oblicz!
        </button>
      </div>
    );
  }
}
