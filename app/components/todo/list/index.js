import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import EllipsisText  from 'react-ellipsis-text';
import dateFormat  from 'dateformat';
import Header from '../../header';
import Footer from '../../footer';
import PageLoader from '../../page-loader';
import "./style.scss";

const defaultProps = {
    isShowCreateBtn : true,
    taskList : [],
    isFetchingList : false,
    fetchingListError : ""  
};

const propTypes = {
    isShowCreateBtn : PropTypes.bool,
    taskList : PropTypes.array,
    isFetchingList : PropTypes.bool,
    fetchingListError : PropTypes.string,
    toggleCreateBtn: PropTypes.func.isRequired,
    toggleIsFetchingList: PropTypes.func.isRequired,
    getTasksListAsync: PropTypes.func.isRequired,
    deleteTaskAsync: PropTypes.func.isRequired
};

class App extends React.Component { 

    componentWillMount() { 
        const { 
            isShowCreateBtn, 
            toggleCreateBtn, 
            toggleIsFetchingList, 
            getTasksListAsync 
        } = this.props;  

        if(!isShowCreateBtn){
          toggleCreateBtn(true)
        } 
        toggleIsFetchingList(true)
        getTasksListAsync()       
    }
   
    render() {
        const { 
            isShowCreateBtn, 
            fetchingListError, 
            isFetchingList, 
            deleteTaskAsync,
            taskList
        } = this.props; 

        return ( 
            <div className="page">      
                {/*Header*/}             
                <Header isShowCreateBtn={isShowCreateBtn} />	
                
                {!isFetchingList && !fetchingListError &&
                    <div className="screenfull horizontal-center elasticContent">  
                        <div className="list_container">   
                            <table className='table list_table'>                    
                                <tbody>
                                    {
                                        taskList.sort((a,b) => {                      
                                            return new Date(b.createdAt) - new Date(a.createdAt)
                                        }).map((obj, index) => {
                                        return <tr key = { index }>                                                
                                          <td>
                                            <div className="list_card_wrap">
                                                <div className="list_card_title">
                                                    <span>
                                                        <EllipsisText text={obj.title} length={41} /> 
                                                    </span>
                                                </div>
                                                <div className="flex-row-space-start">
                                                    <div>
                                                        <span className="list_task_date">{dateFormat(obj.createdAt, "mmmm dS, yyyy,h:MM TT")}</span>
                                                    </div>
                                                    <div className="list_card_controls" style={{"marginLeft": "4px"}}>                                               
                                                        <span>
                                                            <Link to={'/edit/' + obj.id}>
                                                                <i className="fa fa-pencil" aria-hidden="true"></i>                                            
                                                            </Link>                                                    
                                                        </span>
                                                        <span>
                                                            <i onClick = {()=> this.props.deleteTaskAsync(obj.id) } className="fa fa-times" style={{"color": "red"}} aria-hidden="true"></i>                                            
                                                        </span>
                                                    </div>
                                                </div>                     
                                            </div>
                                          </td>                          
                                        </tr>
                                    })}
                                </tbody>
                            </table>                                
                        </div>                                                   
                    </div>
                }

                {(isFetchingList || fetchingListError) &&
                    <div className="screenfull flex-column-center elasticContent">
                        <PageLoader isLoading={isFetchingList} errorMsg={fetchingListError}/>
                    </div>
                }
                  
                {/*Footer*/}                  
                <Footer/>               
            </div>    	  	
        );
  }
}

App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;
