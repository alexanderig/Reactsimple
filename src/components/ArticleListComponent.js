import React, {Component} from "react";
import ArticleComponent from "./ArticleComponent";
import {Link} from "react-router-dom";
//import AddArticleComponent from "./AddArticleComponent";
//import article from "../models/article";

export default class ArticleListComponent extends Component{
    render(){
const {articles} = this.props;
    return(
            <div>

                <Link to='articles/create' className='btn btn-success'>New Article</Link>
                {
                    articles.length !== 0 && articles.map((article) => {
                        return <ArticleComponent key={article.id} article={article}/>
                    })
                }
                {articles.length !== 0 && <h3>Articles count: {articles.length}</h3>}
                {articles.length === 0 && <h3>There is no article</h3>}


                {/*<ArticleComponent article={this.props.articles[1]}/>*/}

            </div>
    );



    }
}

       // export default ArticleListComponent

