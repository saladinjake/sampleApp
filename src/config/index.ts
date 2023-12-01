interface Config{
	baseUrl: string;

}


export default {
	baseUrl: process.env.NODE_ENV=="development" ? "": "api/", 	  
}
