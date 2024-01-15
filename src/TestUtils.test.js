import TestUtils from "./TestUtils";
import { act } from "react-dom/test-utils";

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(() => {
    document.body.removeChild(container)
    container = null;
})

it('')