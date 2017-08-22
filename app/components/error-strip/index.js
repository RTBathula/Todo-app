import React from 'react'
import PropTypes from 'prop-types';
import "./style.scss";

const defaultProps = {
  errorMsg: ""
};

const propTypes = {
  errorMsg: PropTypes.string
};

const ErrorStrip = ({ errorMsg }) => { 
  return ( 
    <div className="flex-row-start-start error_container">                        
      <div className='error_icon vertical-center'>
        <span>
          <i className="fa fa-exclamation-triangle fa-fw"></i>
        </span>
      </div>
      <div className='error_msg vertical-center'>
        <span>{errorMsg? errorMsg: ""}</span>
      </div>                       
    </div>    	  	
  );  
}

ErrorStrip.defaultProps = defaultProps;
ErrorStrip.propTypes = propTypes;

export default ErrorStrip;

