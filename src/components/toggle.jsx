import React from 'react'
import PropTypes from 'prop-types'
import ReactToggle from 'react-toggle'

import ContentTypes from '../content-types'

export default class Toggle extends React.PureComponent {
  static propTypes = {
    docId: PropTypes.string.isRequired
  }

  static initializeDocument(doc) {
    doc.toggled = false
  }

  state = {}

  componentWillMount() {
    this.handle = window.hm.openHandle(this.props.docId)
    this.handle.onChange(doc => {
      this.setState(doc)
    })
  }

  flipToggle = () => {
    this.handle.change(doc => {
      doc.toggled = !doc.toggled
    })
  }

  render() {
    return <ReactToggle checked={this.state.toggled} onChange={this.flipToggle} />
  }
}

ContentTypes.register({
  component: Toggle,
  type: 'toggle',
  name: 'Toggle',
  icon: 'toggle-off',
  resizable: false
})
