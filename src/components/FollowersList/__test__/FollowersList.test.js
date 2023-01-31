import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowerList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe('AddInput', () => {

    beforeEach(() => {
        console.log("running before each test")
    })

    beforeAll(() => {
        console.log("ruunning once")
    })

    afterEach(() => {
        console.log("after each test")
    })

    afterAll(() => {
        console.log("ran once after")
    })

    it('should render input element', async () => {
        render(
            <MockFollowerList/>
        );
        const followerDivElement = await screen.findByTestId(`follower-item-0`)
        //screen.debug()
        expect(followerDivElement).toBeInTheDocument()
    });


    it('should render input element', async () => {
        render(
            <MockFollowerList/>
        );
        const followerDivElement = await screen.findAllByTestId(/follower-item/)
        expect(followerDivElement.length).toBe(1)
    });
 })