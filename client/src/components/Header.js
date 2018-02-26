import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">
              Login With Google
            </a>
          </li>
        );
      default:
        return (
          <ul>
            <li>
              <a href="/games">
                All Games
              </a>
            </li>
            <li>
              <a href="/game/new">
                New Game
              </a>
            </li>
            <li>
              <a href="/api/v1/logout">
                Logout
              </a>
            </li>
          </ul>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper teal darken-2">
          <Link
            to={this.props.auth ? '/profile' : '/'}
            className="left brand-logo"
          >
            Joga Bonito
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
