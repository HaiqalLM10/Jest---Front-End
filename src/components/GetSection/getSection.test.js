import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import GetSection from "./view";
import axios from 'axios';

jest.mock('axios');

const respStatus = 200;
const respHeaders = "text/json";
const respData = {
    "id": 99,
    "name": "Kue",
    "price": 999,
    "stock": 100,
    "imageUrl": ""
};

const mockResponse = {
    status: respStatus,
    headers: {
        "content-type": respHeaders
    },
    data: respData
};


test('buttoonn', async () => {
    render(<GetSection />);

    // cari element button
    const button = screen.getByTestId("btnShow");

    // awal awal, inputnya kosong
    expect(screen.queryByTestId("text-input")).toBe(null)

    // click button show
    userEvent.click(button)

    // inputnya muncul
    waitFor(() => {
        expect(screen.queryByTestId("text-input")).toBeInTheDocument()
    })
});

test('Promise Resolve', async () => {
    await act(async () => {
        await axios.get.mockImplementationOnce(() => Promise.resolve(mockResponse));
        render(<GetSection />);
    });
    const textElement = await screen.getByTestId("btnShow");
    expect(textElement).toBeInTheDocument();
});




