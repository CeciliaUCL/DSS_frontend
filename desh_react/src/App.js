import $ from 'jquery';
import React from "react";
import MyTool from "./tool/my_tool"
import {Helmet} from "react-helmet";

const app_name = "@MedCart"

class App extends React.Component {

    login_click() {
        let name = $("#username_inp").val()
        let pwd = $("#password_inp").val()
        if (!new MyTool().checkInput([name, pwd])) {
            window.alert("Username/Password is empty!")
            return;
        }
        window.location = "home.html"
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Login</title>
                    <link rel="stylesheet" href="assets/css/login_css.css"/>
                </Helmet>
                <div class='container'>
                    <h1>Login</h1>
                    <input type="text" name="username" id="username_inp" placeholder="Username"/>
                    <input type="password" name="password" id="password_inp" placeholder="Password"/>
                    <input onClick={() => this.login_click()} type="button" id="login_btn" value="Login"/>
                    <p></p>
                    <p>{app_name}</p>
                </div>
            </div>
        );
    }
}

export default App;
