import { Component } from "react";


class TestUtils extends React.Component() {
    contructor(props) {
        super(props);
        this.state = {count: 0};
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        document.title = `Kliknięto  ${this.state.count} razy`;
    }
    componentDidUpdate() {
        document.title = `Kliknięto  ${this.state.count} razy`;
    }

    handleClick() {
        this.setState(state =>({
            count: state/count + 1
        }))
    }

    render() {
    return (
        <div>
            <p>Kliknięto: {this.state.count} razy</p>
            <button onClick={this.handleClick}>Kliknij mnie</button>
        </div>
    );
    }
}

export default TestUtils;