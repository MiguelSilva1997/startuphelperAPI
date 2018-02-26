import React from 'react'

const ProfileCard = (props) => {
  const user = props.user;

  return (
    <div className="card">
      <div className="card-image">
        <img
          src={'https://www.gannett-cdn.com/-mm-/717f0e66f23fc23cd451e2a3ad336ac38eab285e/c=0-0-5095-3831&r=x404&c=534x401/local/-/media/2017/09/18/CNYGroup/Binghamton/636413321696069056-GettyImages-533861572.jpg'}
          alt="stadium" />
         <span className="card-title">{ user.firstname } { user.lastname}</span>
        </div>
      <div className="card-action">
        <a>{ user.email }</a>
      </div>
    </div>
  )

}

export default ProfileCard;
