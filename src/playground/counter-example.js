class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        //read data
        try {
            const json = localStorage.getItem('count');
            const count = parseInt(json, 10);

            if (!isNaN(count)) {
                this.setState(() => ({ count }));
           }
        } catch (e) {
            //Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        //save data
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count)
            localStorage.setItem('count', json)
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount!")
    }

    handleAddOne() {

        //updater functions - have access to current state value via the first argument
        this.setState((prevState)=>{
            return{
                count:prevState.count +1
            };
        });
        //alert('handleAddOne')
    }

    handleMinusOne() {
        this.setState((prevState)=>{
            return{
                count:prevState.count-1
            };
        });
    }

    handleReset() {
        this.setState(()=>{
            return{
                count:0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}> +1</button>
                <button onClick={this.handleMinusOne}> -1</button>
                <button onClick={this.handleReset}> reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter count={0}/>, document.getElementById('app'))

// Counter.defaultProps = {
//     count: 0
// }


// let count = 0;
// const addOne = () => {
//     count++;
//     // console.log('addOne', count)
//     renderCounterApp();
// };
//
// //challenge area
// const minusOne = () => {
//     count--;
//     //console.log('minusOne')
//     renderCounterApp();
// };
// const reset = () => {
//     count=0;
//     //console.log('reset')
//     renderCounterApp();
// };
//
//
//
//
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}> +1</button>
//             <button onClick={minusOne}> -1</button>
//             <button onClick={reset}> reset</button>
//         </div>
//     );
//
//
//     ReactDOM.render(templateTwo, appRoot)
// }
//
// renderCounterApp();
//
// const numbers = [55, 101, 1000];
// {
//     numbers.map((number)=>{
//         return <p key={number}>Number: {number}</p>
//     })
// }
/*

const user = {
    name: 'Kanke Ishaku',
    age: '31',
    location: 'London'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
 */
