import axios from 'axios'
//lib to get token on app

axios.interceptors.request.use(
  async (config) => {
    //if not public routes
    if (!!config.url.match('/(login|refresh|signup)/gim')) {
      //#try set Authorizathion on request
      //config.headers.Authorization = myBearerToken
      /*
      if(token === invalid || token === old){
        const userToken = requestNewToken({username, password})
        config.headers.Authorization = `Bearer ${userToken}`
      }
      */
    }

    return config
  },
  (error) => {
    // You can even test for a response code
    // and try a new request before rejecting the promise
    if (error.response.status === 401) return axios(error.config)

    return Promise.reject(error)
  }
)

export default axios
