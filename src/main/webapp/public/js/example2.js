class Note extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hocvien: 35
        }

        this.themhocvien = this.themhocvien.bind(this);
    }

    themhocvien(){
        this.setState({hocvien: this.state.hocvien + 1})
    }

    render(){
        return (
            <div>
                <p>{this.props.text}</p>
                <p>So hoc vien: {this.state.hocvien}</p>
                <button onClick={this.themhocvien}>Them hoc vien</button>
            </div>
        );
    }
}

Note.defaultProps = {
    txt: 'Default Subject'
}

ReactDOM.render(
    <div>
        <Note/>
        <Note text="Hello"/>
    </div>
    , document.getElementById('root'));