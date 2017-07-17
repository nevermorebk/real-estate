var list;
var Note = React.createClass({

    delete(){

        console.log(this.props.id);

        let request = {
            id: this.props.id
        };

        $.ajax({
            async: true,
            url: "/delete",
            method: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(request),
            dataType: "json"
        }).done(function (data) {
            console.log(data);
            list.setState({mang: data})
        });
    },

    edit(){
        this.setState({onEdit: true})
    },

    save(){
        let request = {
            id: this.props.id,
            name: this.refs.newName.value
        };

        $.ajax({
            async: true,
            url: "/save",
            method: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(request),
            dataType: "json"
        }).done(function (data) {
            console.log(data);
            list.setState({mang: data})
        });
        this.setState({onEdit: false})
    },

    cancel(){
        this.setState({onEdit: false})
    },

    getInitialState(){
        return {onEdit: false}
    },

    render(){

        if (this.state.onEdit) {
            return (
                <div className="div-note">
                    <input defaultValue={this.props.children} ref="newName"/>
                    <button className="btn-primary" onClick={this.save}>Luu</button>
                    <button className="btn-danger" onClick={this.cancel}>Huy</button>
                </div>
            );
        } else {
            return (
                <div className="div-note">
                    <p>{this.props.children}</p>
                    <button className="btn-danger" onClick={this.delete}>Xoa</button>
                    <button className="btn-primary" onClick={this.edit}>Sua</button>
                </div>
            );
        }
    }
});

var List = React.createClass({

    getInitialState(){
        list = this;
        return {mang: []}
    },

    render(){
        return (
            <div className="div-list">
                {this.state.mang.map(function (note, index) {
                    return <Note key={index} id={index}>{note}</Note>
                })}
            </div>
        );
    },
       componentDidMount(){
     var that = this;
     $.post("/getData", function (data) {
     that.setState({mang: data})
     })
     }
});

var InputDiv = React.createClass({

    add(){

        let request = {
            name: this.refs.name.value
        };

        $.ajax({
            async: true,
            url: "/add",
            method: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(request),
            dataType: "json"
        }).done(function (data) {
            console.log(data);
            list.setState({mang: data})
        });

        list.setState({mang: list.state.mang.concat(this.refs.name.value)});
    },

    render(){
        return (
            <div>
                <input type="text" ref="name" placeholder="Enter your name"/>
                <button onClick={this.add}>Them</button>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <InputDiv/>
        <List/>
    </div>,
    document.getElementById('root'));
