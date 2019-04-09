/**
 * Created by blues on 2019-04-09.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class SubMenu extends Component {
    static propTypes = {
        className : PropTypes.string,
        title : PropTypes.node,
        disabled : PropTypes.bool
    };

    static defaultProps = {
        disabled : false
    };

    constructor(props) {
        super(props);
        this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
    }

    render() {
        const {className, disabled} = this.props;
        const names = classNames(
            'easy-menu-item',
            {'easy-menu-item-able':!disabled},
            {'easy-menu-item-disabled':disabled},
            {[className]:className!==undefined});

        return (
            <li className={names} onMouseOver={this.onMouseOverHandler}>
                {this.renderTitle()}
                {this.renderArrow()}
            </li>
        )
    }

    renderTitle() {
        const {className, title} = this.props;
        const names = classNames('easy-menu-title', {[className]:className!==undefined});

        return (
            <span className={names}>{title}</span>
        )
    }

    renderArrow() {
        const {className} = this.props;
        const names = classNames('easy-menu-arrow',{[className]:className!==undefined});

        return (
            <span className={names}/>
        )
    }

    onMouseOverHandler() {

    }
}