import axios from 'axios';
import UserService from 'src/services/UserService';

const axiosInstance = axios.create({
  baseURL: 'https://api.einstonlabs.com',
  headers: {
    'x-custom-appId': "65dcf47e-2ec2-4d5a-85e6-fe6853ef09b9"
  }
});

axiosInstance.interceptors.request.use(
  async (request) => {
    let token = ""
    try{
      token = await UserService.getToken();
    }catch{
      token = "<Not Required>"
    }
    request.headers = {...request.headers, Authorization: `Bearer ${token}`}
    return request;
  },
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'There is an error!'
    )
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error)
    return Promise.reject(
      (error.response && error.response.data) || 'There is an error!'
    )
  }
);

export default axiosInstance;
