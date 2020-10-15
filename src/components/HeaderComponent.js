import React from "react";
import NavComponent from "./NavComponent";
//import ArticleComponent from "./article";
//import HeaderComponent from "./header";

function HeaderComponent(props){
    return (

           <header>
               <h1>Blog {props.title}</h1>
               <NavComponent/>
           </header>
    );
}


export default HeaderComponent;
