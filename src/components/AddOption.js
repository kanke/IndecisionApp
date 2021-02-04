import React from 'react';

export default class AddOption extends React.Component {
    state = {  error: undefined };

    //this behaviour needs to happen here and not parent
    handleAddOption = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value.trim() //remove spaces before and after
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));

        if (!error) {
            e.target.elements.option.value = ''
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}
