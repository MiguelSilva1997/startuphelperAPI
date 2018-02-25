import React from 'react'
import { reduxForm, Field } from 'redux-form'
import validate from './validate'
import gameField from './gameField'

const GameFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={gameField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={gameField}
        label="Last Name"
      />
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(GameFormFirstPage)
