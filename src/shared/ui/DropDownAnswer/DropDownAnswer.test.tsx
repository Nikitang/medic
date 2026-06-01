import { render, screen, fireEvent } from '@testing-library/react';
import { DropDownAnswer } from './DropDownAnswer';

describe('DropDownAnswer', () => {
    const mockQuestion = 'Какой вопрос?';
    const mockAnswer = 'Это ответ на ваш вопрос.';

    test('renders question text', () => {
        render(<DropDownAnswer question={mockQuestion} answer={mockAnswer} />);
        expect(screen.getByText(mockQuestion)).toBeInTheDocument();
    });

    test('toggles answer visibility on click', () => {
        render(<DropDownAnswer question={mockQuestion} answer={mockAnswer} />);

        const body = screen.getByText(mockQuestion).closest('.body');
        const answerContainer = screen.getByTestId('answer-container');

        expect(answerContainer).not.toHaveClass('active');
        expect(answerContainer).toHaveClass('inActive');

        fireEvent.click(body!);
        expect(answerContainer).toHaveClass('active');
        expect(answerContainer).not.toHaveClass('inActive');

        fireEvent.click(body!);
        expect(answerContainer).not.toHaveClass('active');
        expect(answerContainer).toHaveClass('inActive');
    });

    test('applies custom className', () => {
        render(
            <DropDownAnswer
                question={mockQuestion}
                answer={mockAnswer}
                className="custom-faq"
            />,
        );
        const container = screen
            .getByText(mockQuestion)
            .closest('.dropDownAnswer');
        expect(container).toHaveClass('custom-faq');
    });
});
