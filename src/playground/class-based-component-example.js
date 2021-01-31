class Header extends React.Component {
    render() {
        //return JSX here
        return (<div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}>
                    What should I do?
                </button>
            </div>
        );
    }
}


class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Removal All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}


class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

//old way of writing set state

// this.setState(() => {
//     return {error}
// })


// this.setState((prevState) => {
//     return {
//         options: prevState.options.concat([option])
//     }
// })

// this.setState(() => {
//     return {
//         options: []
//     }
// })