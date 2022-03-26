import PropTypes from 'prop-types';


function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    children: 'Send',
    version: 'primary',
    type : 'button',
    isDisabled: false
}


export default Button