var assert = require("assert");
var expect = require('chai').expect;
var should = require('chai').should();
var idGenerator = require("../index");

   
    it("Should return 6 digit long number", function(){
        var id = idGenerator.generate(new Date().toISOString()).length;
         console.log('length:',id);
        id.should.equal(6);
    });
