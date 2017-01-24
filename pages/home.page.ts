import { browser, element, by } from 'protractor';
export class HomePage {
    get() {
        browser.get('http://localhost:3000/');
    }
    word = element(by.binding('text'));
}