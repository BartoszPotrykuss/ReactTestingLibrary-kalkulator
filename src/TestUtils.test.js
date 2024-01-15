import TestUtils from "./TestUtils";
import { act } from "react-dom/test-utils";
import React from "react";
import ReactDom from 'react-dom/client'

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(() => {
    document.body.removeChild(container)
    container = null;
})

it('czy potrafi wyrenderowac i zmieniac licznik', () => {
    
    act(() => {
        ReactDom.createRoot(container).render(<TestUtils/>) 
       })

     const button = container.querySelector('button');
     const label = container.querySelector('p');
     expect(label.textContent).toBe('Kliknięto 0 razy');
     expect(document.title).toBe('Kliknięto 0 razy');

    act(() => {
        button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    })
    expect(label.textContent).toBe('Kliknięto 1 razy');
    expect(document.title).toBe('Kliknięto 1 razy');
});