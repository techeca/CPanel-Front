import { BehaviorSubject } from 'rxjs';
import { fetchWrapper, URL_API } from '../helpers';

const baseUrl = `${URL_API.apiUrl}/api/content`;
const contentSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('cpanelWebContent')));

export const contentService = {
  content: contentSubject.asObservable(),
  get contentValue () { return contentSubject.value},
  getContentHome,
  getStatsWeb
};

function getContentHome() {
  //console.log('obtenemos data de HOME de API')
  return fetchWrapper.get(`${baseUrl}/home`)
    .then(c => {
      contentSubject.next(c);
      localStorage.setItem('cpanelWebContent', JSON.stringify(c));
      return c;
    });
}

function getStatsWeb() {

  return fetchWrapper.get(`${baseUrl}/stats`)
    .then(s => {
      contentSubject.next(s);
      localStorage.setItem('cpanelStatsWeb', JSON.stringify(s));
      return s;
    });
}
