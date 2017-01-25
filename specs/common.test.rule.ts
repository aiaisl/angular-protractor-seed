import { ElementFinder } from "protractor";
import * as webdriver from "selenium-webdriver";
class CommonRule {
    public isDisable(ele: ElementFinder): webdriver.promise.Promise<boolean> {
        return ele.getAttribute("disabled").then(res => {
            return res === "true";
        });
    }
}

export var commonRule: CommonRule = new CommonRule();

export var mock = require("protractor-http-mock");