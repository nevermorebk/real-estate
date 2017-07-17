var React = require('../../node_modules/react');

var Note = React.createClass({
    del(){
        this.props.remove(this.props.index)
    },
    render(){
        return (
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.del}>Delete</button>
            </div>
        );
    }
});

module.exports = Note;