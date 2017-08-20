var baseURL = 'http://rest.ensembl.org'

if (process.env.NODE_ENV !== 'production') {	
	baseURL = 'http://rest.ensembl.org'
}

export default baseURL

