import React from 'react'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }
  render() {
    return (
      <div>This is the agent: {this.props.userAgent}</div>
    )
  }
}
