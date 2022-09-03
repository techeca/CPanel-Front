//import getConfig from 'next/config';
import { userService } from '../services';

//API HOST
//Moverla, (pero no se a donde)  
export const URL_API = {apiUrl:'http://localhost:3001'};

export const fetchWrapper = {
  get,
  post,
  postSn,
  put,
  delete: _delete
};

function get(url){
  //const tmp = parseToken(data);
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(url) }
};
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader(url) },
    credentials: 'include',
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body){
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeader(url) },
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function _delete(url, body){
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(url)
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function postSn(url, body){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse);
}

//help function
function authHeader(url) {
  const user = userService.userValue;
  const isLoggedIn = user && user.token;
  const isApiUrl = url.startsWith(URL_API.apiUrl);
  if(isLoggedIn && isApiUrl) {
    return {Authorization: `Bearer ${user.token}`};
  }else {
    return {};
  }
}

function handleResponse(response){
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if(!response.ok){
      if([401, 403].includes(response.status) && userService.userValue){
        userService.logout();
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
