import React, { Component } from 'react'
import Navbar from './Componants/Navbar'
import News from './Componants/News'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App"
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category='general' />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category='business' />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category='entertainment' />} />
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category='general' />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category='health' />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category='science' />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category='sports' />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
