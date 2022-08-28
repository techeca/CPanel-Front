import { BehaviorSubject } from 'rxjs';
import { fetchWrapper } from '../helpers';

const baseUrl = `http://localhost:3001/api/user`;
const userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));

export const userService = {
  user: userSubject.asObservable(),
  get userValue () { return userSubject.value},
  register,
  login,
  logout
};

function register(email, password){
  return fetchWrapper.postSn(`${baseUrl}/register`, {email, password})
    .then(user => {
      userSubject.next(user);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    })
}

function login(email, password) {
  return fetchWrapper.postSn(`${baseUrl}/login`, {email, password})
    .then(user => {
      userSubject.next(user);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    });
}

function logout(){
  localStorage.removeItem('user');
  userSubject.next(null);
  //navigate('/login');
}
