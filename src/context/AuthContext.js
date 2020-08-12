import React, { Component, createContext } from "react";

export const AuthContext = createContext();
class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
  };
  authToggle = () => {
    this.setState((prevState) => {
      return { isAuthenticated: !prevState.isAuthenticated };
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, authToggle: this.authToggle }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
