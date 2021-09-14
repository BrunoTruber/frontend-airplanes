import React, { Component } from "react";
import api from "./api";

class App extends Component {

  state = {
    airplanes : [],
  }

  async componentDidMount(){
    const response = await api.get("");
    console.log(response.data)

    this.setState({ airplanes: response.data });
  }

  render() {
    return(
      <div>
        <h1>listar</h1>
      </div>
    )
  }
}

export default App;
