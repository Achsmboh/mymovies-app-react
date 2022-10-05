import React, { Component } from "react";

export class ButtonPrimary extends Component {
  render() {
    return <div className="p-3 border rounded-lg bg-white text-black text-center font-bold hover:text-yellow-500">{this.props.label}</div>;
  }
}

export class ButtonSecondary extends Component {
  render() {
    return <div className="p-3 border rounded-lg bg-slate-500 text-black my-5">{this.props.label}</div>;
  }
}

// export { ButtonPrimary, ButtonSecondary };
