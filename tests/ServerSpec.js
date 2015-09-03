var request = require('supertest');
var express = require('express');
var expect = require('chai').expect;
var app = require('../src/server.js');

var User = require('../src/users/userModel.js');


var userObj = {
  'token': 'xdxdlolKIDDDDDanimalstatatatatatatahahaha',
  'userData' : {
    'id': 1234,
    'email': 'omar@awesomeomar.com'
  }
}
/////////////////////////////////////////////////////
// NOTE: these tests are designed for mongo!
/////////////////////////////////////////////////////

describe('', function() {

  beforeEach(function(done) {
    // Remove the testing elem from the DB
    User.find({facebookId: 1234}).remove().exec();
    done();
  });

  describe('User Creation: ', function() {

    it('should return a 201 on successful post', function(done){
      request(app)
        .post('/api/user/')
        .send
          (userObj)
        .expect(201)
        .end(function(error, response) {
          done();
        })
    })

    it('creates users in a DB based on requests', function(done) {
      request(app)
        .post('/api/user/')
        .send
          (userObj)
        .expect(201)
        .end(function(error, response) {
          User.find({facebookId: 1234}, function(err, response){
            expect(response).to.deep.equal(userObj);
          })
          done();
        })
    });

    it('should return an object after posting a user', function(done){
      request(app)
        .post('/api/user/')
        .send
          (userObj)
        .expect(201)
        .end(function(error, response) {

          expect(typeof response.body).to.equal('object');
          done();
        })
    })

    it('should return the same query if requested twice', function(done){
      var id1;
      request(app)
        .post('/api/user/')
        .send
          (userObj)
        .expect(201)
        .end(function(error, response) {
          id1 = response.body;

          request(app)
          .post('/api/user/')
          .send
            (userObj)
          .expect(201)
          .end(function(error, response1) {
            expect(response1.body).to.deep.equal(id1);
            done();
          })

        })
    })

    it('should return 400 if there is an invalid request', function(done){
      request(app)
      .post('/api/user/')
      .send
        ({lol: "LOL WTF?!?!?!??!? IF UR READING THIS I HAVE A MSG FOR U.... GET REKT M999998584758787 hahahahahha"})
      .expect(400)
      .end(function(error, response) {
        done();
      })
    })

  });

});