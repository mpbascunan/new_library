// assert es la libreria que nos permite verificar cosas
const assert = require('assert')
// instanciamos el codigo de nuestra libreria
const newlibraryjs = require('../lib')

// describe es la forma en la que describimos que pasará
describe('newlibraryjs', function() {
  describe('#hello()', function() {
    it('should return a string representing a greeting', function() {
      assert.equal(newlibraryjs.hello(), "Hello world!")
    })
  })
})