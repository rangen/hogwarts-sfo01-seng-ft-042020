import React, { Component } from 'react'


export default class PigCard extends Component {
    state = {
        showingDetails: false,
        hideMePleaseIBegYou: false
    }

    getImageFile = () => {
        let name = this.props.pig.name;
        name = name.replace(/ /g, "_");
        name = `/hog-imgs/${name}.jpg`.toLowerCase();
        console.log(name)
        return name
    }

    clickPiggie = () => {
        this.setState(prevState=>({showingDetails: !prevState.showingDetails}))
    }

    hideMe = () => {
        this.setState(dreamIsDreamy=>({hideMePleaseIBegYou: true}))
    }

    render() {
        if (this.state.hideMePleaseIBegYou) {
            return null
        }
         
        if (!this.state.showingDetails) {
                return (
                <div className="ui eight wide column" onClick={this.clickPiggie}>
                <h2>{this.props.pig.name}</h2>
                <img src={this.getImageFile()}></img>
            </div>
            )
        } else {
            return (
                <div className="ui eight wide column" onClick={this.clickPiggie}>
                    <p>Specialty: {this.props.pig.specialty}</p>
                    <p>Greased: {this.props.pig.greased ? "Hell Yes!" : "Sadly, No"}</p>
                    <p>Weight: {this.props.pig.weight}</p>
                    <p>Highest Medal: {this.props.pig['highest medal achieved']}</p>
                    <button onClick={this.hideMe}>Hide Me, I'm Embarassed!</button>
                </div>
            )
        } 
    }
}