import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileCard from './ProfileCard'

class Dashboard extends Component {
  renderContent() {
    if (!this.props.auth) {
      return;
    }
    return (
      <ProfileCard
        key={this.props.auth.id}
        user={this.props.auth}
      />
    )
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Dashboard);
