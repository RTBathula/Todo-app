import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";

const defaultProps = {
  isLoading: false,
  errorMsg: ""
};

const propTypes = {
  isLoading: PropTypes.bool,
  errorMsg: PropTypes.string
};

const PageLoader = ({ isLoading, errorMsg }) => {  
  return ( 
    <div className="page_loader">                        
      {isLoading && !errorMsg &&
        <div className="flex-row-start-start">
          <div>
            <span>
              <i className="fa fa-circle-o-notch fa-spin fa-fw"></i>&nbsp;                    
            </span>
          </div>
          <div style={{"marginTop":"2px"}}>
            <span>                    
              Please wait...
            </span>
          </div>
        </div>
      }

      {!isLoading && errorMsg &&
        <div className="flex-row-start-start">
          <div>
            <span>
              <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;                    
            </span>
          </div>
          <div style={{"marginTop":"2px"}}>
            <span>                    
              {errorMsg}
            </span>
          </div>
        </div>
      }                      
    </div>    	  	
  );  
}

PageLoader.defaultProps = defaultProps;
PageLoader.propTypes = propTypes;

export default PageLoader;
