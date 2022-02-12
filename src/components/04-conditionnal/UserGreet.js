import { Component } from "react";

export class UserGreet extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
    };
  }

  connect = () => {
    this.setState({ isLogged: !this.state.isLogged });
  };

  render() {
    return this.state.isLogged ? (
      <div>
        <button onClick={this.connect}>Se déconnecter</button>
        <span>Welcome Wishwas</span>
      </div>
    ) : (
      <div>
        <button onClick={this.connect}>Se connecter</button>
        <span>Welcome Inconnu</span>
      </div>
    );
  }
}
