import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", { name: /Add/i })
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(buttonElement)
    });
}

describe('Todo', () => {
    it('should render same text passed into title prop', () => {
        render(<MockTodo />);
        addTask(["Go shopping"])
        const divElemt = screen.getByText(/Go shopping/i)
        expect(divElemt).toBeInTheDocument()
        // const headingElement = screen.getByText(/my header/i)
        // expect(headingElement).toBeInTheDocument();

    });
    
    it('should render same text passed into title prop', () => {
        render(<MockTodo />);
        addTask(["Go shopping", "Pet cat",  "Wash hand"])
        const divElemt = screen.getAllByTestId("task-container")
        expect(divElemt.length).toBe(3)
        // const headingElement = screen.getByText(/my header/i)
        // expect(headingElement).toBeInTheDocument();
    });
    
    it('should render many items', () => {
        render(<MockTodo />);
        addTask(["Go shopping", "Pet cat",  "Wash hand"])
        const divElemt = screen.getAllByTestId("task-container")
        expect(divElemt.length).toBe(3)
        // const headingElement = screen.getByText(/my header/i)
        // expect(headingElement).toBeInTheDocument();
    });
    
    it('task should not have completed class when initially rendered', () => {
        render(<MockTodo />);
        addTask(["Go shopping"])
        const divElemt = screen.getByText(/Go shopping/i)
        expect(divElemt).not.toHaveClass("todo-item-active")
        // const headingElement = screen.getByText(/my header/i)
        // expect(headingElement).toBeInTheDocument();
    });
    
    it('task should not have completed class when clicked', () => {
        render(<MockTodo />);
        addTask(["Go shopping"])
        const divElemt = screen.getByText(/Go shopping/i)
        fireEvent.click(divElemt)
        expect(divElemt).toHaveClass("todo-item-active")
       
      });
 })
