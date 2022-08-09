import {sum, sumSpread, minus, multiply, divide, pow, isBigger, isSmaller, getUserInfo} from './examples'

describe('Sum', () => {
    test('should be a function', () => {
        expect(typeof sum).toBe('function');
    });

    test('should receive two numbers as arguments', () => {
        expect(sum("a", true)).toBe("You must provide 2 numbers!");
    });

    test('should return the sum of two numbers', () => {
        expect(sum(2, 3)).toBe(5);
    });
})

describe('Sum spread', () => {
    test('should return the sum a few numbers', () => {
        expect(sumSpread(2,3,5,6)).toBe(16);
    });

    test('should returned result not NaN', () => {
        expect(sumSpread(2,3,5,6)).not.toBeNaN();
    });
})

describe('Minus', () => {
    test('should return the difference of numbers', () => {
        expect(minus(9, 10)).toBe(-1);
    });

    test('should receive two numbers as arguments', () => {
        expect(minus("a", true)).toBe("You must provide 2 numbers!");
    });
})

describe('Multiply', () => {
    test('should return 4', () => {
        expect(multiply(2, 2)).toBe(4);
    });

    test('should return zero', () => {
        expect(multiply(2, 0)).toBe(0);
    });
})

describe('Divide', () => {
    test('should return 1', () => {
        expect(divide(2, 2)).toBe(1);
    });

    test('should return error message Infinity', () => {
        try {
            divide(4, 0);
        } catch(err) {
            expect(err.message).toBe(Infinity);
        }
    });
})

describe('Pow', () => {
    test('should return a number to the power', () => {
        expect(pow(2, 4)).toBe(16);
    });

    test('should returned result not NaN', () => {
        expect(pow(2,3)).not.toBeNaN();
    });
})

describe('isBigger', () => {
    test('should return true if a > b else return false', () => {
        expect(isBigger(10, 2)).toBe(true);
        expect(isBigger(2, 10)).toBe(false);
    });

    test('should returned result not NaN', () => {
        expect(isBigger(2,3)).not.toBeTruthy();
    });
})

describe('isSmaller', () => {
    test('should return true if a < b else return false', () => {
        expect(isSmaller(2, 10)).toBe(true);
        expect(isSmaller(222, 10)).toBe(false);
    });

    test('should returned result not NaN', () => {
        expect(isSmaller(2,3)).toBeTruthy();
    });
})

describe('getUserInfo', () => {
    test('should check that the object that returns getUserInfo contains Vick in the fullName property', () => {
        const userObj = getUserInfo();
        const fullName = userObj.fullName;
        expect(fullName).toContain('Vick');
    });

    test('should return a correct user info', () => {
        const userObj = getUserInfo();
        expect(getUserInfo()).toEqual({
            fullName: 'Vick Jone',
            age: 30,
            id: '123',
        });
    });
})
