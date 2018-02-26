import React from 'react'
import { reduxForm, Field } from 'redux-form'
import validate from './validate'
import gameField from './gameField'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const GameFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <h4>
      <Field name="email" type="email" component={gameField} label="Email" />
        <div>
          <label> Game Size </label>
          <div>
            <Field name="size" type="number" component={gameField}/>
          </div>
        </div>
      <br></br>
      <div>
        <button type="button" className="previous deep-orange lighten-5 darken-1 btn-flat left white text" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next teal darken-1 btn-flat right white text">
          Next
        </button>
      </div>
    </h4>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(GameFormSecondPage)
