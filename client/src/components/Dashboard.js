import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileCard from './ProfileCard'
import UserGame from './UserGame'
import GameApi from './utils/teamApi'

class Dashboard extends Component {

  renderContent() {
    if (!this.props.auth) {
      return;
    }
    return (
      <div>
        <div className="row">
          <div className="col s4 offset-s4">
            <ProfileCard
              key={this.props.auth.id}
              user={this.props.auth}
            />
          </div>
          <div className="col s6 offset-s3">
            <h1> Next Games </h1>
            <UserGame id={ this.props.auth.uid } />
          </div>
        </div>
      </div>
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
