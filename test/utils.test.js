// IMPORT MODULES under test here:
import { makeStatsString } from '../utils.js';

const test = QUnit.test;

test('should return a string describing the current state', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `Your head has been changed: ${4} times!!\nYour middle has been changed: ${5} times!!\nYour bottom has been changed: ${1} times!!`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString(4, 5, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'this test proves that this function will return a string concat with the 3 arguments passed to the function');
});
