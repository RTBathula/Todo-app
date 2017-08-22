import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import "./style.scss";

const defaultProps = {
  isShowCreateBtn: true
};

const propTypes = {
  isShowCreateBtn: PropTypes.bool
};

const Header = ({ isShowCreateBtn }) => { 
  return (          	
    <div className="screen-full header_strip horizontal-center">
      <div className="screen-desktop">   
        <header className="header_container flex-column-center">                     
            <div className="flex-row-space-start">      
                <div className="header_title">
                  <span>TODO APP</span> 
                </div>

                {isShowCreateBtn &&
                  <div className="header_create">                           
                     <button  onClick={() =>  browserHistory.push('/create') } className="default-inputfield"> 
                       <i className="fa fa-plus"></i>&nbsp;
                        Create
                     </button>
                  </div>
                }
                                                                  
            </div>                             
        </header>
      </div>
    </div>               	  	
  );
}

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header;
