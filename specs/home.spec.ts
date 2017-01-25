import { HomePage } from "../pages/home.page"
import { browser } from "protractor";
import { mock, commonRule } from "./common.test.rule"
describe('测试首页', ()=>{
    let homePage = new HomePage();
    beforeEach(()=>{
        mock(['home.mock', "common.mock"]);
    })
    fit("hello world", ()=>{
        homePage.get();
        expect(homePage.word.getText()).toBe('你好!')
    })
})