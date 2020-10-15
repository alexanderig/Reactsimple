import React, {Component} from "react";

export default class EditArticleComponent extends Component{
    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props.location);

        const id = this.props.match.params.id;

        return (
            <React.Fragment>
                <h1>Edit article {id}</h1>
                <p>Name: {new URLSearchParams(this.props.location.search).get("name")}</p>
                <p>Pass: {new URLSearchParams(this.props.location.search).get("pass")}</p>
            </React.Fragment>
        );
    }
}
