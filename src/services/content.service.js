import { BehaviorSubject } from 'rxjs';
import { fetchWrapper } from '../helpers';

const baseUrl = `http://localhost:3001/api/content`;
const contentSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('cpanelWebContent')));

export const contentService = {
  content: contentSubject.asObservable(),
  get contentValue () { return contentSubject.value},
  getContentHome
};

function getContentHome() {
  return fetchWrapper.get(`${baseUrl}/home`)
    .then(c => {
      contentSubject.next(c);
      localStorage.setItem('cpanelWebContent', JSON.stringify(c));
      return c;
    });
}
