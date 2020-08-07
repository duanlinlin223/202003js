import React from "react";
import { Link } from "react-router-dom";
export default class UserList extends React.Component {
    constructor() {
        super();
    }
    render() {
        let user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>用户名</td>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <Link to={`/user/list/${item.id}`}>
                                            {item.id}
                                        </Link>
                                    </td>
                                    <td>{item.name}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
