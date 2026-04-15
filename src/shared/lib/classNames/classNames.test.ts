import { classNames } from './classNames';

describe('classNames.test', () => {
    const expected = 'someClass';
    test('with only wirst param', () => {
        expect(classNames('someClass')).toBe(expected);
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expected,
        );
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
});
