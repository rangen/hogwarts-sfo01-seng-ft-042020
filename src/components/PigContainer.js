import React, { Fragment } from "react";
import PigCard from "./PigCard";
import hogs from "../porkers_data";

class PigContainer extends React.Component {
   state = {
     greasedFilter: false,
     nameSorted: false
   }
  
  toggleGreasy = () => {
    this.setState(prevState=>({greasedFilter: !prevState.greasedFilter}))
  }

  toggleSortMethod = () => {
    this.setState(prevState=>({nameSorted: !prevState.nameSorted}))
  }

  sortByName = (filteredHogs) => {
    return filteredHogs.sort((hog1, hog2) => {
      if (hog1.name > hog2.name) {
        return 1;
      } else {
        return -1;
      }
    })
  }
  
  sortByWeight = (filteredHogs) => {
    return filteredHogs.sort((hog1, hog2) => {
      if (hog1.weight > hog2.weight) {
        return 1;
      } else {
        return -1;
      }
    })
  }

  getHogs = () => {
    let theseHogs;

    if (this.state.greasedFilter) {
      theseHogs = hogs.filter(hog=>hog.greased)
    } else {
      theseHogs = hogs
    } 
    //now theseHogs is either ALL hogs or GREASY hogs, it doesn't matter which

    //now let's figure out which way to sort THOSE hogs and return theseHogs sorted by one of the two functions
    if (this.state.nameSorted) {
      return this.sortByName(theseHogs)
    } else {
      return this.sortByWeight(theseHogs)
    }
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.toggleGreasy}>{this.state.greasedFilter ? 'GREASY AF Only' : 'All Greasiness Welcome' }</button>
          <button onClick={this.toggleSortMethod}>{this.state.nameSorted ? 'Sorted by Name!' : 'Sorted by Weight!' }</button>
        </div>
        <br /><br /><br />
        <div className="ui grid container">
          {this.getHogs().map(eachHog => <PigCard  pig={eachHog} /> )}
        </div>
      </div>
    );
  }
}

export default PigContainer;
