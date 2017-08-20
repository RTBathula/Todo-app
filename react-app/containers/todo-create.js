import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'

import * as todoActions from '../actions/todo'

//Components
import Todocreate from '../components/todo-create/create'

class App extends Component { 

  render() {   
    return (    
  		<Todocreate todo={this.props.todo} todoActions={this.props.todoActions} />  		    
    );
  }
}

const mapStateToProps = state => ({
  todo : state.todo
})

const mapDispatchToProps = dispatch => ({
  todoActions: bindActionCreators(todoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


