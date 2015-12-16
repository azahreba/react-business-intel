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
            <div key="wrapper" style={[styles.wrapper]}>
                <button key="base"
                        style={[styles.base, styles[this.props.size], styles[this.props.type],styles[this.props.kind] ]}>
                    {this.props.children}
                </button>
                {Radium.getState(this.state, 'base', ':hover') ? (
                    <span key="tip" style={[styles.tip, this.props.tip && styles.tipBase]}>{this.props.tip}</span>
                ) : null}
            </div>
        )
    }

}
var styles = {
    wrapper: {
        position: 'relative',
        //background: colors.purple200,
        width: 'auto',
        height: 'auto'
    },
    tipBase: {
        padding: '4px 6px',
    },
    tip: {
        position: 'absolute',
        fontSize: 12,
        background: colors.grey700,
        color: colors.grey50,
        width: 'auto',
        height: 'auto',
        top: -30,
        left: 0
    },
    base: {
        ':hover': {}
    },
    default: {
        background: colors.grey500,
        color: colors.grey50,
        boxShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084)',
        fontWeight: 500,
        width: 'auto',
        '@media (max-width: 992px)': {
            minWidth: '100%'
        },
        ':hover': {
            background: colors.grey600
        },
        ':focus': {
            background: colors.grey600
        },
        ':active': {
            background: colors.grey50
        }

    },
    primary: {
        border: 0,
        background: colors.blue500,
        color: colors.blue50,
        ':hover': {
            background: colors.blue700
        },
        ':focus': {
            background: colors.blue700
        },
        ':active': {
            background: colors.blue700
        }
    },
    success: {
        background: colors.green500,
        color: colors.green50,
        ':hover': {
            background: colors.green700
        },
        ':focus': {
            background: colors.green700
        },
        ':active': {
            background: colors.green700
        }
    },
    warning: {
        background: colors.orange500,
        color: colors.orange50,
        ':hover': {
            background: colors.orange700
        },
        ':focus': {
            background: colors.orange700
        },
        ':active': {
            background: colors.orange700
        }
    },
    danger: {
        background: colors.red500,
        color: colors.red50,
        ':hover': {
            background: colors.red700
        },
        ':focus': {
            background: colors.red700
        },
        ':active': {
            background: colors.red700
        }
    },
    xl: {
        height: 56,
        paddingLeft: 26,
        paddingRight: 26,
        lineHeight: 1.5,
        fontSize: 16
    },
    lg: {
        height: 40,
        paddingLeft: 16,
        paddingRight: 16,
        lineHeight: 1.3,
        fontSize: 14
    },
    md: {
        height: 36,
        paddingLeft: 14,
        paddingRight: 14,
        lineHeight: 1,
        fontSize: 13
    },
    sm: {
        height: 30,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 12,
        lineHeight: .8,
    },
    xs: {
        height: 24,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 11,
        lineHeight: .6,
    },

};

