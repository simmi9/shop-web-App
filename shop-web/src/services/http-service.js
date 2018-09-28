import 'whatwg-fetch';
class HttpService
    { 
        getProducts = () => { 
        	 fetch('http://localhost:3007/product').then(response => {console.log(response.json());
                                                                     })
                            }
    }      
export default HttpService;
                                