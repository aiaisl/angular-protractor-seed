import { Config, browser } from 'protractor';
import { SpecReporter } from "jasmine-spec-reporter"
export let config: Config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./specs/home.spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',

    noGlobals: false,
    onPrepare: () => {
        require('protractor-http-mock').config = {
            protractorConfig: 'conf.js',
            rootDirectory: __dirname
        };
        jasmine.getEnv().addReporter(new SpecReporter());
    }
};