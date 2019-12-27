import React, { Component } from 'react';

//list create for items of dogs name
import DogsList from './dogsList/dogsList.js';



import './App.css';


//create compnent of App for task react
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      images: []
    };

  }
  // component create for task react didmount
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list')
      .then((res) => {
        return res.json();
      })
      .then((dogs) => {
        this.setState({
          dogs: dogs.message,
          selectedDog: dogs.message[0]
        });

      })


  }



  render() {
    return (
// display data in it

      <div className="">
        <h1>Hello , Choose a Breed to View its Images</h1>

        <div className="">
          <DogsList dogs={this.state.dogs}  />
        </div>


      </div>
      );
  }
}
export default App;
