import React, { Component } from 'react'
import About from './components.js/About'
import Navbar from './components.js/Navbar'
import Newscomponent from './components.js/Newscomponent'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'light',
      progress:0
    }
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  toggle = () => {
    if (this.state.mode === 'light') {
      this.setState({ mode: 'dark' });
      document.body.style.backgroundColor = '#4f4f4f';
      document.body.style.color = 'white';
    }
    else {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  render() {
    return (
      <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setState({progress:0})}
      />
          <Navbar tog={this.toggle} mode={this.state.mode} />
          <Switch>
            <Route exact path="/">
              <Newscomponent key="general" category="general" mode={this.state.mode} title={'General'} progress={this.setProgress}/>
            </Route>
            <Route exact path="/about">
              <About key="about" mode={this.state.mode}/>
            </Route>
            <Route exact path="/business">
              <Newscomponent key="business" category="business" mode={this.state.mode} title={'Business'} progress={this.setProgress}/>
            </Route>
            <Route exact path="/sports">
              <Newscomponent key="sports" category="sports" mode={this.state.mode} title={'Sports'} progress={this.setProgress}/>
            </Route>
            <Route exact path="/technology">
              <Newscomponent key="technology" category="technology" mode={this.state.mode} title={'Technology'} progress={this.setProgress}/>
            </Route>
            <Route exact path="/science">
              <Newscomponent key="science" category="science" mode={this.state.mode} title={'Science'} progress={this.setProgress}/>
            </Route>
            <Route exact path="/entertainment">
              <Newscomponent key="entertainment" category="entertainment" mode={this.state.mode} title={'Entertainment'} progress={this.setProgress}/>
            </Route>
            <Route exact path="/health">
              <Newscomponent key="health" category="health" mode={this.state.mode} title={'Health'} progress={this.setProgress}/>
            </Route>
          </Switch>
      </Router>
    )
  }
}



