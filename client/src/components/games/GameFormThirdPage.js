import React from 'react'
import { reduxForm, Field } from 'redux-form'
import validate from './validate'
import gameField from './gameField'

const GameFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h4>
        <label> Date </label>
        <div>
          <Field name="date" type="date" component={gameField}/>
        </div>
        </h4>
      </div>
      <div>
        <h4>
        <label> Start Time </label>
        <div>
          <Field name="time" type="time" component={gameField}/>
        </div>
        </h4>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" placeholder="Notes" />
        </div>
      </div>
      <div>
        <button type="button" className="previous deep-orange lighten-5 darken-1 btn-flat left white text" onClick={previousPage}>
          Previous
        </button>
        <button className="teal darken-1 btn-flat right white text" type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(GameFormThirdPage)
