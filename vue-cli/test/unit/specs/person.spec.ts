import { expect } from 'chai'
import { Person } from '../../../src/components/person'

describe('Person module', () => {

    it('should populate credentials', () => {
        var expected: Person = new Person('first', 'last');
        expected.firstName.should.eql('first')
        expected.lastName.should.eql('last');
    });

    it('should return correct message', () => {
        var expected = new Person('first', 'last');
        var expectedAnswer = expected.sayHello();
        expectedAnswer.should.eql('Hello World from last first');        
    });

});