console.log('App.js is running')

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

//Only reference function, don't call it!
const onFormSubmit = (e) => {
    e.preventDefault() //stops page refresh and allows us to instead run some code to handle event
    const option = e.target.elements.option.value //element event started on

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = '';

        render();
    }
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option)
};
const render = () => {
    //JSX - Javascript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app');
render();