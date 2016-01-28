
'use strict'

import React from 'react'

class Button extends React.Component {

  static propTypes = {
    label: React.PropTypes.string,
    className: React.PropTypes.string
  }

  static defaultProps = {
    label: 'buttonzzzz',
    className: 'default-class'
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.label}
      </button>
    )
  }
}

export default Button
