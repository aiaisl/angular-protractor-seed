var mock = require('protractor-http-mock');
import { HomePage } from "../pages/home.page"
import { browser } from "protractor"
describe('测试首页', ()=>{
    let homePage = new HomePage();
    beforeEach(()=>{
        mock(['home.mock']);
    })
    fit("hello world", ()=>{
        homePage.get();
        expect(homePage.word.getText()).toBe('你好!')
    })
})