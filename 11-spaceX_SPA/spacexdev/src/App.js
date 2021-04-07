import React from 'react'
import './style.css'
import Header from './components/Header'
import Main from './components/Main'
import Features from './components/Features'
import Footer from './components/Footer'
import Calendar from './components/Calendar'
import Details from './components/Details'
import FetchData from './service/FetchData'

class App extends React.Component {

  fetchData = new FetchData()
  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: []
  }

  componentDidMount(){
    this.updateRockets()
  }

  updateRockets(){
    this.fetchData.getRocket()
      .then(data => {
        this.setState({ rockets: data.map(item => item.name) })
        return data
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => this.setState({rocketFeatures}))
  }
  
  changeRocket = rocket => {
    this.setState({
      rocket
    }, this.updateRockets)
  }

  render() {

    return (
      <>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
        <Main rocket={this.state.rocket}/>
        <Features />
        <Footer />
        <Calendar />
        <Details />
      </>
    );
  }
}

export default App;
