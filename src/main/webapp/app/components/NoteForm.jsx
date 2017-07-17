var React = require('../../node_modules/react');

class NoteForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isAdding: false}
    }

    add() {
        var v = this.refs.txt.value;
        this.refs.txt.value = '';
        this.props.addNote(v);
        this.toggle();
    }

    toggle(){
        this.state.isAdding = !this.state.isAdding;
        this.setState(this.state);
    }

    render() {
        if(this.state.isAdding){
            return (
                <div>
                    <input type="text" ref="txt" placeholder="Enter your note!"/>
                    <br/>
                    <button onClick={this.add.bind(this)}>Add</button>
                </div>
            )
        }
        return (
           <button onClick={this.toggle.bind(this)}>+</button>
        )

    }
}
;

module.exports = NoteForm;