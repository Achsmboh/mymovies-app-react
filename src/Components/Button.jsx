import React, { Component } from "react";

export class ButtonPrimary extends Component {
  render() {
    return (
      <button className="p-3 border rounded-lg bg-white text-black text-center font-bold hover:text-yellow-500" onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}

export class ButtonSecondary extends Component {
  render() {
    return (
      <button className="p-3 border rounded-lg bg-slate-200 text-black m-5" onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}

// export { ButtonPrimary, ButtonSecondary };
