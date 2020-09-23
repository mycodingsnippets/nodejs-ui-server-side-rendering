import React, {Component} from "react";
import './autoCompleteText.css'
import countries from "./countries";

export default class AutoCompleteText extends Component{

    constructor(props){
        super(props);

        this.items = countries;

        this.state = {
            suggestions: [],
            text: ''
        }
    }

    onTextChange = (e) => {
        const value = e.target.value;

        let suggestions = [];

        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter((v) => {
                return regex.test(v);
            });
        }

        this.setState(() => {
            return {
                suggestions,
                text: value
            }
        })
    };

    suggestionSelected = (value) => {
        this.setState(() => {
            return {
                suggestions: [],
                text: value
            }
        })
    }

    renderSuggestions(){
        const {suggestions} = this.state;

        if(suggestions.length === 0){
            return null;
        }

        return (
            <ul>
                {suggestions.map((item, index) => (
                    <li key={index} onClick={() => this.suggestionSelected(item)}>{item}</li>
                ))}
            </ul>
        )
    }

    render() {
        const {text} = this.state;
        return (
            <div className="auto-complete-container">
                <div className="AutoCompleteText">
                    <input value={text} onChange={this.onTextChange}/>
                    {this.renderSuggestions()}
                </div>
            </div>
        );
    }

}