/**
 * Created by blues on 2019-04-09.
 * 分割线
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default class Divider extends Component {
    static propTypes = {
        className : PropTypes.string
    };

    render() {
        const {className} = this.props;
        const names = classnames('easy-menu-divider', {[className]:className!==undefined});
        return (
            <li className={names}/>
        )
    }
}