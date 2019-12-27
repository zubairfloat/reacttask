import React, { Component } from 'react';

// create functions for Doglistitems for task of react js and then import this file
function DogsListItem(props) {
  return (
    <li className={props.className} id = {props.dog} >{props.dog}</li>
  )
}
class DogsList extends Component {
  render() {
    let dogsListContent = [];
    this.props.dogs.forEach((dog) => {
      let className = 'list-group-item';
      if (this.props.selectedDog === dog) {
        className += ' active'
      }
      dogsListContent.push(
        <DogsListItem className={className} key = {dog} dog={dog} />
      )
    })
    return (


      <a href="url" target="_blank">
          <h3> {dogsListContent} </h3>
      </a>
    )
  }
}

export default DogsList;