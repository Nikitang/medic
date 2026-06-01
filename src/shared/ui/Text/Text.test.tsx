import { render, screen } from '@testing-library/react';
import { Text, TextAlign, TextColors } from './Text';
import styles from './Text.module.scss';

describe('Text', () => {
    test('renders title when provided', () => {
        render(<Text title="Заголовок" />);
        expect(screen.getByText('Заголовок')).toBeInTheDocument();
    });

    test('renders text when provided', () => {
        render(<Text text="Основной текст" />);
        expect(screen.getByText('Основной текст')).toBeInTheDocument();
    });

    test('renders both title and text when both provided', () => {
        render(<Text title="Заголовок" text="Основной текст" />);
        expect(screen.getByText('Заголовок')).toBeInTheDocument();
        expect(screen.getByText('Основной текст')).toBeInTheDocument();
    });

    test('applies default alignment (left)', () => {
        const { container } = render(<Text text="Текст" />);
        const outerDiv = container.firstChild;
        expect(outerDiv).toHaveClass(styles.text);
        expect(outerDiv).toHaveClass(styles.left);
    });

    test('applies center alignment', () => {
        const { container } = render(
            <Text text="Текст" align={TextAlign.CENTER} />,
        );
        const outerDiv = container.firstChild;
        expect(outerDiv).toHaveClass(styles.center);
    });

    test('applies right alignment', () => {
        const { container } = render(
            <Text text="Текст" align={TextAlign.RIGHT} />,
        );
        const outerDiv = container.firstChild;
        expect(outerDiv).toHaveClass(styles.right);
    });

    test('applies default color (primary)', () => {
        const { container } = render(<Text text="Текст" />);
        const outerDiv = container.firstChild;
        expect(outerDiv).toHaveClass(styles.primary);
    });

    test('applies bold modifier', () => {
        const { container } = render(<Text text="Текст" bold />);
        const outerDiv = container.firstChild;
        expect(outerDiv).toHaveClass(styles.bold);
    });

    test('applies custom className', () => {
        const { container } = render(
            <Text text="Текст" className="custom-text" />,
        );
        const outerDiv = container.firstChild;
        expect(outerDiv).toHaveClass('custom-text');
    });

    test('combines multiple modifiers correctly', () => {
        const { container } = render(
            <Text
                title="Заголовок"
                text="Текст"
                align={TextAlign.CENTER}
                color={TextColors.SECONDARY}
                bold
                className="extra"
            />,
        );
        const outerDiv = container.firstChild;
        expect(outerDiv).toHaveClass(
            styles.center,
            styles.secondary,
            styles.bold,
            'extra',
        );
    });

    test('empty render has only outer div', () => {
        const { container } = render(<Text />);
        const outerDiv = container.firstChild;
        expect(outerDiv).toBeEmptyDOMElement();
    });
});
