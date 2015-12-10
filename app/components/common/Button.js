import React from 'react';
import Radium from 'radium';
/*Styles*/
import colors from '../../settings/colors.js';

@Radium
export default class Button extends React.Component {
    // Constructor
    constructor(props) {
        // Running constructor of Parent (React.Component) for binding this to object.
        // Dynamically assigned global property This is always a component itself.
        super(props);
    }

    /*Requiring parameters(optional.)*/
    //static propTypes = {
    //    kind: React.PropTypes.oneOf(['primary', 'warning']).isRequired
    //};

    render() {
        return (
            <div>
                <button
                    style={[styles.default, styles[this.props.size], styles[this.props.type],styles[this.props.kind]]}>
                    {this.props.children}
                </button>
            </div>
        )
    }

}
var styles = {
    default: {
        background: colors.grey100,
        boxShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084)',
        display: 'block',
        fontWeight: 500,
        width: 'auto',
        color: colors.grey800
    },
    warning: {
        background: colors.red500,
        color: colors.red50
    },
    primary: {
        border: 0,
        background: colors.blue500,
        color: colors.blue50
    },
    xl: {
        paddingLeft: 26,
        paddingRight: 26,
        height: 56,
        lineHeight: 1.5,
        fontSize: 16
    },
    lg: {
        paddingLeft: 16,
        paddingRight: 16,
        lineHeight: 1.3,
        fontSize: 14
    },
    md: {
        paddingLeft: 14,
        paddingRight: 14,
        lineHeight: 1,
        fontSize: 13
    },
    sm: {
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 12,
        lineHeight: .8,
    },
    xs: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 11,
        lineHeight: .6,
    },

};

