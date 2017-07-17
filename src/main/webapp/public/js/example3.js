var Hello = React.createClass({

    laythongtin(){
        alert(this.props.children)
    },

    render(){
        return (
            <div>
                <h1 className="mauvang">Tran Dang Quang</h1>
                <p>{this.props.children}</p>
                <button onClick={this.laythongtin}>Thong tin</button>
            </div>
        )
    }
});

var KhoaHoc = React.createClass({
    render(){
        return (
            <h3>Lap trinh JS</h3>
        )
    }
});

var InputTag = React.createClass({

    show(){
        var text = this.refs.txt.value;
        console.log(text);
        var select = this.refs.sl.value;
        console.log(select);
    },

    render(){
        return (
            <div>
                <select ref="sl">
                    <option value="a">AAAA</option>
                    <option value="b">BBBB</option>
                    <option value="c">CCCC</option>
                </select>
                <input type="text" ref="txt"/>
                <button onClick={this.show}>Show</button>
            </div>
        );

    }
});

var Com = React.createClass({

    add(){
        this.setState({num: this.state.num + 1})
    },

    getInitialState(){
        return {num: 0}
    },

    render(){
        return (
            <div>
                <button onClick={this.add}>Hello {this.state.num}</button>
            </div>
        );
    }
});

var Album = React.createClass({

    add(){
        if (this.state.hinh < 4) {
            this.setState({hinh: this.state.hinh + 1}) //doan nay co the su dung toan tu ba ngoi thay vi if
        }
    },

    sub(){
        if (this.state.hinh > 1) {
            this.setState({hinh: this.state.hinh - 1})
        }
    },

    getInitialState(){
        return {hinh: 1};
    },

    render(){
        return (
            <div>
                <img src={'images/' + this.state.hinh + '.jpg'}/><br/>
                <button onClick={this.sub}>Quay lai</button>
                <button onClick={this.add}>Tiep theo</button>
            </div>
        );
    }
});

var Images = React.createClass({

    changeImage(){
        this.setState({hinh: (this.state.hinh % 4) + 1}) //doan nay co the su dung toan tu ba ngoi thay vi if
    },


    getInitialState(){
        return {hinh: 1};
    },

    render(){
        return (
            <div>
                <img className="img-circle" src={'public/images/' + this.state.hinh + '.jpg'}/><br/>
            </div>
        );
    },
    componentDidMount(){
        setInterval(this.changeImage, 2000);
    }
});

var Note = React.createClass({
    render(){
        return (
            <div>
                <img src={this.props.src}/>
                <p>{this.props.children}</p>
            </div>
        );
    }
});

var List = React.createClass({

    add(){
        this.state.mang.push("Bonggia", "Azongseo");
        this.setState(this.state);
    },

    getInitialState(){
        return {mang: [
            {src: "images/1.jpg", noidung: "Anh so 1"},
            {src: "images/2.jpg", noidung: "Anh so 2"},
            {src: "images/3.jpg", noidung: "Anh so 3"},
            {src: "images/4.jpg", noidung: "Anh so 4"},
        ]};
    },

    render(){
        return (
            <div>
                <button onClick={this.add}>Them</button>
                {this.state.mang.map(function (note, index) {
                    return <Note src={note.src} key={index}>{note.noidung}</Note>
                })}
            </div>
        );
    }

});

ReactDOM.render(
    <div>
        {/*<InputTag/>
         <Hello>This is prop children</Hello>
         <KhoaHoc/>*/}
        {/*<Com/>*/}
        {/*<Album/>*/}
        <Images/>
        {/*<List/>*/}
        {/*<List/>*/}
    </div>, document.getElementById('root'));