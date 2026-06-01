import { render, screen } from '@testing-library/react';
import {
    Card,
    CardBgOptions,
    CardHeightOptions,
    CardWidthOptions,
} from './Card';

describe('Card', () => {
    test('renders children correctly', () => {
        render(<Card>Test Content</Card>);
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    test('applies default background class', () => {
        render(<Card>Test</Card>);
        const card = screen.getByText('Test').closest('div');
        expect(card).toHaveClass('bg');
    });

    test('applies border class when border prop is true', () => {
        render(<Card border>Test</Card>);
        const card = screen.getByText('Test').closest('div');
        expect(card).toHaveClass('border');
    });

    test(`does not apply border class when bord
        er prop is false or undefined`, () => {
        render(<Card>Test</Card>);
        const card = screen.getByText('Test').closest('div');
        expect(card).not.toHaveClass('border');
    });

    test('applies width class correctly', () => {
        render(<Card width={CardWidthOptions.W2}>Test</Card>);
        const card = screen.getByText('Test').closest('div');
        expect(card).toHaveClass('w2');
    });

    test('applies custom className', () => {
        render(<Card className="custom-class">Test</Card>);
        const card = screen.getByText('Test').closest('div');
        expect(card).toHaveClass('custom-class');
    });

    test('combines multiple mods correctly', () => {
        render(
            <Card
                background={CardBgOptions.SECONDARY}
                width={CardWidthOptions.W3}
                height={CardHeightOptions.H2}
                border
                className="extra"
            >
                Test
            </Card>,
        );
        const card = screen.getByText('Test').closest('div');
        expect(card).toHaveClass('secondary', 'w3', 'h2', 'border', 'extra');
    });

    test('card has base class', () => {
        render(<Card>Base</Card>);
        const card = screen.getByText('Base').closest('div');
        expect(card).toHaveClass('card');
    });
});
