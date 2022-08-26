import React from 'react'
import PropTypes from 'prop-types'

const Message = (props) => {

  const closeMsg = () => {
    props.setMessage('');
  }

  return (
    <div className={`alert alert-${props.generateStatus} fade show mt-4 mb-0" role="alert`}>
      { props.msg }
      <button type="button" onClick={closeMsg} className="btn-close" data-dismiss="alert" aria-label="Close">
        {/* <span aria-hidden="true">&times;</span> */}
      </button>
    </div>
  )
}

Message.propTypes = {
  msg: PropTypes.string.isRequired
}

export default Message
