import { expect } from 'chai';
import { Customer } from '../../../src/components/customer';

describe('Customer.ts', () => {
    
        it('should populate credentials', () => {
            var expected: Customer = new Customer('first', 'last', 'code');
            expected.firstName.should.eql('first');
            expected.lastName.should.eql('last');
        });
    
        it('should populate code', () => {
            var expected: Customer = new Customer('first', 'last', 'code');
            expected.code.should.eql('code');
        });
    
    });