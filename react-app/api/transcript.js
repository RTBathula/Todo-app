import q from 'q'
import baseURL from '../config/keys'
import axios from "axios"

export const searchByGeneSymbol = (geneSymbol) => {        

  var deferred = q.defer()

  var payload = {
    method         : "get",
    url            : baseURL+"/lookup/symbol/homo_sapiens/"+geneSymbol+".json?;expand=1",    
    validateStatus :   function (status) {
      return status >= 200 && status < 500; //customized to catch 400 erros
    }    
  };

  axios(payload)
  .then(response => {    
    if(response.status!=200){      
      deferred.reject(response.data.error || "No valid lookup found for symbol")
    }
    if(response.status==200){          
      deferred.resolve(response.data)
    }       
  }).catch(err => {
    let errMsg = err || "Unable to make the request";   
    deferred.reject(errMsg)
  })

  return deferred.promise   
};

export const getSequence = (transcriptId, typeName) => {        

  var deferred = q.defer()

  var payload = {
    method         : "get",
    url            : baseURL+"/sequence/id/"+transcriptId+".json?type="+typeName+"&multiple_sequences=true",     
    validateStatus :   function (status) {
      return status >= 200 && status < 500; //customized to catch 400 erros
    }    
  };

  axios(payload)
  .then(response => {   
    if(response.status!=200){           
      deferred.reject(response.data.error || "Unable find sequence")
    }
    if(response.status==200){     
      deferred.resolve(response.data)
    }         
  }).catch(err => {
    let errMsg = err || "Unable to make the request";
    deferred.reject(errMsg)
  })

  return deferred.promise   
};

