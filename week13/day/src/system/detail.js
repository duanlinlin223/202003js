import React from "react";
export default class Detail extends React.Component {
    constructor() {
        super();
    }
    render() {
        // console.log(this.props.match.params.id);
        let user = JSON.parse(localStorage.getItem("user"));
        let curId = this.props.match.params.id;
        let curUser = user.filter((item) => item.id == curId);
        return <div>{curUser[0].name}</div>;
    }
}
