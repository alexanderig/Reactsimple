import React, {Component} from "react";
import './AddArticleComponent.css'
import Article from "../models/article";
import {Redirect} from 'react-router-dom';

export default class AddArticleComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            isAgree: false,
            isAdded: false
        }
    }

    onBtnClickHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        const{title,text} = this.state;
        this.props.onAddArticle(new Article(title, text));
        this.setState({isAdded: true});
        //this
    };

    onChangeHandler = (event) => {
        const {id, value} = event.target;
        this.setState({[id]: value});
    };

    titleChangeHandler = (event) => {
       this.setState({title: event.target.value});
    };

    textChangeHandler = (event) => {
        this.setState({text: event.target.value});
    };

    agreeChangeHandler = (event) => {
        this.setState({isAgree: event.target.checked});
    };

    validate = () => {
        const {title, text, isAgree} = this.state;
        return title.trim().length > 2 && text.trim().length > 5 && isAgree;
    };

    render() {

        if(this.state.isAdded){
            return <Redirect to='/articles'/>
        }

        const {title, text, isAgree} = this.state;
        return (
            <form className="addArticle">
                <div>
                    <label htmlFor='title'>Title: </label>
                    <input type='text' id='title' value={title} onChange={this.onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor='text'>Text: </label>
                    <textarea id='text' value={text} onChange={this.onChangeHandler}> </textarea>
                </div>
                <div>
                    <input type='checkbox' id='rules' checked={isAgree} onChange={this.agreeChangeHandler}/>
                    <label htmlFor='rules'>I Agree</label>
                </div>
                <button onClick={this.onBtnClickHandler} disabled={!this.validate()}>Add</button>

            </form>
        );
    }



}
