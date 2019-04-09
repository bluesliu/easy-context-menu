/**
 * Created by blues on 2019-04-09.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Item extends Component {
    static propTypes = {
        className : PropTypes.string,
        disabled : PropTypes.bool,
        onClick : PropTypes.func
    };

    static defaultProps = {
        disabled : false
    };

    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    render() {
        const {className, disabled} = this.props;
        const names = classNames(
            'easy-menu-item',
            {'easy-menu-item-able':!disabled},
            {'easy-menu-item-disabled':disabled},
            {[className]:className!==undefined});

        return (
            <li className={names}
                onClick={this.onClickHandler}>
                {this.renderTitle()}
            </li>
        )
    }

    renderTitle() {
        const {className, children} = this.props;
        const names = classNames('easy-menu-title', {[className]:className!==undefined});

        return (
            <span className={names}>{children}</span>
        )
    }

    onClickHandler(){
        const {id, onClick, disabled} = this.props;
        if(disabled){
            return;
        }
        if(onClick){
            onClick.call(this, id);
        }
    }
}