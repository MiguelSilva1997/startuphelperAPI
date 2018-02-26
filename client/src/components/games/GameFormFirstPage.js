import React from 'react'
import { reduxForm, Field } from 'redux-form'
import validate from './validate'
import gameField from './gameField'

const GameFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <h4>
      <Field
        name="firstname"
        type="text"
        component={gameField}
        label="First Name"
      />
      <Field
        name="lastname"
        type="text"
        component={gameField}
        label="Last Name"
      />
      <div>
        <button type="submit" className="next teal darken-1 btn-flat right white text">
          Next
        </button>
      </div>
      </h4>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(GameFormFirstPage)
