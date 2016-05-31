import chai from 'chai';
import App from '../app/main.js';
//var contentEdit = require('../app/main.js');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('LINEButton()', function() {

    it('should be defined', function() {
    	var el = document.getElementById("linebutton");
        assert.equal(el, undefined);
    })
})
