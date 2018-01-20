import chai from 'chai'
var should = chai.should()
import hello from '../dev/lib/hello'

describe('code.js', () => {
    context('echo', () => {
        it('should return Hello yamamoto when the value is yamamoto', () => {
            hello('yamamoto').should.equal('Hello yamamoto')
        })
    })
})