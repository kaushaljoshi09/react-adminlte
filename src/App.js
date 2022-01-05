import React, { Component } from "react";
import { BrowserRouter }    from "react-router-dom";
import Master from "./components/partial/Master";

class App extends Component {

  render() {
    return ( 
      <div>
        <BrowserRouter>
          <Master/>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
