
export const validateForm = (taskFieldObj) => {
  
  	let response = {
  		isValid: true,
  		titleValidateMsg : "",
  		descriptionValidateMsg : ""
  	}

  	if(!taskFieldObj.title){
  		response.isValid = false;
  		response.titleValidateMsg = "title is required";
  	}

  	if(!taskFieldObj.description){
  		response.isValid = false;
  		response.descriptionValidateMsg = "description is required";
  	}

  	return response;
};