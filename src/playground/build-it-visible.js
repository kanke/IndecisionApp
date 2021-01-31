class BuildItVisible extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleText = this.handleToggleText.bind(this)
        this.state = {
            toggle: false
        }
    }

    handleToggleText() {
        this.setState((prevState) => {
            return {
                toggle: !prevState.toggle
            };
        })

    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleText}>{this.state.toggle ? "Hide details" : "Show details"}</button>
                {this.state.toggle && (
                    <div>
                        <p> Hey. These are some details you can now see!
                        </p>
                    </div>)}
            </div>
        )
    }
}

ReactDOM.render(<BuildItVisible />, document.getElementById('app'))
//
// let toggle = false
// const toggleText = () => {
//     toggle = !toggle
//
//     render();
// }
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleText}>{toggle ? "Hide details" : "Show details"}</button>
//             {toggle && (
//                 <div>
//                     <p> Hey. These are some details you can now see!
//                     </p>
//                 </div>)}
//         </div>
//     );
//     ReactDOM.render(template, appRoot)
// }
//
//
// const appRoot = document.getElementById('app');
// render();