import React, {Component} from "react";

export default class TextInputComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            isValid: false
        };
        this.input = React.createRef();
    }

    componentDidMount() {
        this.input.current.focus();
    }

    onChangeHandler = (event) => {
        let text = event.target.value;
        let isValid = this.validate(text);
        this.setState({text:text, isValid: isValid});
        // if(this.validate(text)){
        //     this.setState({text: event.target.value});
        // }
        console.log(this.state)
    };

    validate = (text) => {
        return text.trim().length > 3;
    };

    render() {
        let color = this.state.isValid ? "lavender": "lightpink";
        const spanDisplay = !this.state.isValid ? "inline": "none";
        return (
            <React.Fragment>
            <input type="text"
                   style={{backgroundColor: color}}
                   value={this.state.text}
                   onChange={this.onChangeHandler}
                   ref={this.input}
            />
            <span style={{display: spanDisplay}}> text Length must be greater than 3</span>
            </React.Fragment>
        );
    }
}
