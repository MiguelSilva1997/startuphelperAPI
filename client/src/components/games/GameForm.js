import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GameFormFirstPage from './GameFormFirstPage'
import GameFormSecondPage from './GameFormSecondPage'
import GameFormThirdPage from './GameFormThirdPage'

class GameForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div className="row">
        <div className="col s6 offset-s3">
          {page === 1 && <GameFormFirstPage onSubmit={this.nextPage} />}
          {page === 2 && (
            <GameFormSecondPage
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />
          )}
          {page === 3 && (
            <GameFormThirdPage
              previousPage={this.previousPage}
              onSubmit={onSubmit}
            />
          )}
        </div>
      </div>
    )
  }
}

GameForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default GameForm;
