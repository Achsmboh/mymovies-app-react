import React, { Component } from "react";
import Layout from "Components/Layout";

class Example extends Component {
  state = {
    email: "",
    password: "",
  };
  render() {
    return (
      <Layout>
        <p>{this.state.email}</p>
        <input className="bg-neutral-200" placeholder="email" type="email" onChange={(e) => this.setState({ email: e.target.value })} />

        <input className="bg-neutral-200" placeholder="password" type="password" onChange={(e) => this.setState({ password: e.target.value })} />
      </Layout>
    );
  }
}

export default Example;
