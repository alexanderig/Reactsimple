import React, {Component} from "react";
import "./ArticleComponent.css"
import {Link} from "react-router-dom";
/*function ArticleComponent(){
    let article = {
        title: 'React',
        content: 'JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[7] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.\n' +
            '\n' +
            'Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[8] JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior,[9] and all major web browsers have a dedicated JavaScript engine to execute it.'
    }
    return (<article>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
    </article>)
}*/

class ArticleComponent extends Component{

    constructor(props) {
        super(props);


        this.state = {
            headerStyle: {
                color: 'blue'
            },
            contentVisible: false,
            rate: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event){
        console.log(`handle click on article ${this.props.article.title}`);
        console.log(event.target);
        //this.state.contentVisible = true; not right we need use set state for object
        this.setState({contentVisible: true});
    }

    rateIncrement = (function(){
        console.log(`rate increment click on article ${this.props.article.title}`);
        //this.setState({rate: ++this.state.rate})
        this.setState((prevState, props) =>{
            return{
                rate: ++prevState.rate
            }
        });
    }).bind(this);

    rateDecrement = (function(){
        console.log(`rate decrement click on article ${this.props.article.title}`);
        if(this.state.rate > 0)
        {
            //this.setState({rate: --this.state.rate})
            this.setState((prevState, props) =>{
                return{
                    rate: --prevState.rate
                }
            })
        }


    }).bind(this);

    render() {

        const styles = {
    color: 'darkblue',
    width: '90%',
    margin: 'auto'
};

        const{contentVisible, headerStyle, rate} = this.state;
        const {article} = this.props;
        return (
            <article>
            <div>
                <button onClick={this.rateDecrement}>-</button>
                <span className="rate">{rate}</span>
                <button onClick={this.rateIncrement}>+</button>
            </div>

            <h1 style = {headerStyle}>{article.title}</h1>
            {/*<h2 style={{color:'darkgrey'}}>{this.props.article.title}</h2>*/}
            {contentVisible && <p style={styles}>{article.content}</p>}
            {!contentVisible && <button onClick={this.handleClick}>Detail...</button>}
            <div>
                <Link to={`/articles/edit/${article.id}`} className='btn btn-warning' >Edit</Link>
            </div>


        </article>);
    }
}


export default ArticleComponent;



