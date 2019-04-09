/**
 * Created by blues on 2019-04-09.
 */
import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./easy-menu.css";
import Item from "./Item";
import Divider from "./Divider"
import SubMenu from "./SubMenu";

class Menu extends Component {
    static propTypes = {
        className : PropTypes.string,
        onClick : PropTypes.func
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    render() {
        const {className} = this.props;
        // map
        const items = React.Children.map(this.props.children, (element, index)=> {
            if (!element) {
                return null;
            }
            const {type: elementType} = element;
            if (elementType !== Item
                && elementType !== Divider
                && elementType !== SubMenu) {
                console.warn("警告: Menu 的子组件类型必须是 Menu.Item、Menu.Divider、Menu.SubMenu");
                return null;
            }

            const {key} = element;
            const newProps = {
                id: key,
                className: className
            };
            if(elementType === Item){
                newProps.onClick = this.onClickHandler;
            }
            const mergeProps = Object.assign({}, element.props, newProps);
            return React.cloneElement(element, mergeProps);
        });

        const names = classNames('easy-menu', {[className]:className!==undefined});
        return (
            <ul className={names}>
                {items}
            </ul>
        )
    }

    onClickHandler(key){
        const {onClick} = this.props;
        if(onClick){
            onClick.call(this, key);
        }
        hide();
    }
}


let node;
const popup = (menu, x=0, y=0) => {
    if(!node){
        node = document.createElement('div');
        node.style.position = 'absolute';
        node.style.zIndex = '1000';
        document.body.appendChild(node);
        document.addEventListener('mousedown', onMouseDown);
    }

    ReactDOM.render(menu, node, ()=>{
        node.style.left = `${x}px`;
        node.style.top = `${y}px`;
    });
};

const onMouseDown = (e)=>{
    if (e.target &&
        (e.target.matches('.easy-menu')
            || e.target.matches('.easy-menu-item')
            || e.target.matches('.easy-menu-title')
            || e.target.matches('.easy-menu-arrow')
        )) {
        return;
    }
    hide();
};

const hide = () => {
    document.removeEventListener('mousedown', onMouseDown);
    ReactDOM.unmountComponentAtNode(node);
    document.body.removeChild(node);
    node = null;
};

Menu.Popup = popup;

export default Menu;