import baseURL from '../../config';
import axios from "axios";

export const getTasksList = () => {     

  var payload = {
    method : "get",
    url : baseURL+"/tasks",    
    validateStatus : function (status) {
      return status >= 200 && status < 500; //customized to catch 400 erros
    }    
  };

  return new Promise((resolve, reject) => {
    axios(payload)
    .then(response => {      
      if(response.status !== 200){      
        return reject("Unable to find the tasks")
      }
      if(response.status === 200){          
        resolve(response.data)
      }       
    }).catch(err => {      
      reject(err || "Unable to make the request")
    })
  }) 
};

export const createNewTask = (title, description) => {      

  var payload = {
    method : "post",
    url : baseURL+"/task/create/" + title + "/" + description ,    
    validateStatus : function (status) {
      return status >= 200 && status < 500; //customized to catch 400 erros
    }    
  };

  return new Promise((resolve, reject) => {
    axios(payload)
    .then(response => {            
      if(response.status !== 200 && response.status !== 201){      
        return reject("Unable to crrate new tasks")
      }
      if(response.status === 201){          
        resolve(response.data)
      }       
    }).catch(err => {      
      reject(err || "Unable to make the request")
    })
  }) 
};

export const getTaskById = (id) => {      

  var payload = {
    method : "get",
    url : baseURL+"/task/" + id ,    
    validateStatus : function (status) {
      return status >= 200 && status < 500; //customized to catch 400 erros
    }    
  };

  return new Promise((resolve, reject) => {
    axios(payload)
    .then(response => {            
      if(response.status !== 200){      
        return reject("Unable to get task")
      }
      if(response.status === 200){  
        resolve(response.data)
      }       
    }).catch(err => {      
      reject(err || "Unable to make the request")
    })
  }) 
};

export const updateTask = (id, title, description) => {      

  var payload = {
    method : "put",
    url : baseURL+"/task/update/" + id + "/" + title + "/" + description,    
    validateStatus : function (status) {
      return status >= 200 && status < 500; //customized to catch 400 erros
    }    
  };

  return new Promise((resolve, reject) => {
    axios(payload)
    .then(response => {   
      if(response.status !== 204){      
        return reject("Unable to update task")
      }
      if(response.status === 204){  
        resolve()
      }       
    }).catch(err => {      
      reject(err || "Unable to make the request")
    })
  }) 
};

export const deleteTask = (id) => {      

  var payload = {
    method : "delete",
    url : baseURL+"/task/delete/" + id,    
    validateStatus : function (status) {
      return status >= 200 && status < 500; //customized to catch 400 erros
    }    
  };

  return new Promise((resolve, reject) => {
    axios(payload)
    .then(response => {   
      if(response.status !== 200){      
        return reject("Unable to delete task")
      }
      if(response.status === 200){  
        resolve()
      }       
    }).catch(err => {      
      reject(err || "Unable to make the request")
    })
  }) 
};