var baseURL = 'http://rest.ensembl.org'

if (process.env.NODE_ENV !== 'production') {	
	baseURL = 'http://localhost:9001'
}

export default baseURL

