import 'whatwg-fetch';
/*class HttpService
    { 
        getProducts = () => { 
        	 fetch('http://localhost:3007/product').then(response => {console.log(response.json());
                                                                     })
                            }
    } 

*/
class HttpService
    { 
        getProducts =()=>{ var promise =new Promise((resolve, reject)=>{
                         fetch('http://localhost:3007/product').then(response=>{
                             resolve(response.json());
                             //response.header("Access-Control-Allow-Origin", "*");
                                                        })
        });
            
         return promise;
                         
        
                        }
            
    }


export default HttpService;
