import React, { Component } from 'react';
import "./css/default.css";
import "./css/mainPage.css";
import MainSearchBox from "./MainSearchBox.js";

class MainPage extends Component {
  render(){
    return(
      <div className="main-page">
        <MainSearchBox> </MainSearchBox>
      </div>
    )
  }
}
export default MainPage;
