import React, {Component} from "react";
import ArticleListComponent from "./ArticleListComponent";
import HeaderComponent from "./HeaderComponent";
import articlesRepository from "../models/mock-articles"
//import TextInputComponent from "./TextInputComponent";
//import ArticleComponent from "./ArticleComponent";
import AddArticleComponent from "./AddArticleComponent";
import {Switch, Route} from 'react-router-dom';
import TextInputComponent from "./TextInputComponent";
import ChildRoutes from "./ChildRoutes";
import EditArticleComponent from "./EditArticleComponent";


class AppComponent extends Component{

  state = {
            articles: articlesRepository
        };

  addArticleHandler = (article) => {
      console.log('app add article handler');
      this.setState((oldState, props) =>{
          let articles = oldState.articles;
          articles.push(article);
            return{
                articles: articles
            }
      })
  };

render() {
    return (
        <React.Fragment>
            <HeaderComponent  title={"Blog"}/>

            <Switch>
                <Route path='/text-input' component={TextInputComponent}/>
                <Route path='/articles' exact>
                    <ArticleListComponent articles={this.state.articles}/>
                </Route>

                <Route path='/articles/create'>
                    <AddArticleComponent onAddArticle={this.addArticleHandler}/>
                </Route>

                <Route path='/articles/edit/:id(\d+)'
                       children={(info)=>{
                           console.log(info);
                           return <EditArticleComponent match={info.match} location={info.location}/>
                       }}/>
                <Route path='/child' component={ChildRoutes}/>
                <Route path='/' exact>
                    <h1>Home</h1>
                </Route>
                <Route children={()=><h1>Not Found</h1>}/>

            </Switch>


            {/*<ArticleComponent article={articlesRepository[0]}/>*/}
            {/*<TextInputComponent/>*/}
            {/*<AddArticleComponent onAddArticle={this.addArticleHandler}/>*/}
            {/*<ArticleListComponent articles={this.state.articles}/>*/}
        </React.Fragment>
    );
}


}


export default AppComponent;
