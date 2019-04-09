import React, {Component} from "react";
import Menu from "../src";
import "./custom-style.css";

export default class App extends Component {

    menu = (
        <Menu className="my-menu" onClick={(key) => {
            console.log(key)
        }}>
            <Menu.Item key="0">
                Item 0
            </Menu.Item>
            <Menu.Item key="1">
                Item 1
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="2" disabled>
                Item 2
            </Menu.Item>
        </Menu>
    );

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <button onClick={(e)=>{this.showMenu(e)}}>show menu</button>
            </div>
        )
    }

    showMenu(e){
        const rect = e.target.getBoundingClientRect();
        Menu.Popup(this.menu, rect.x, rect.bottom)
    }
}

