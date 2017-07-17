/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';import AppBar from 'material-ui/AppBar';
import {pinkA200, blueA400,darkBlack, lightBlack, transparent} from 'material-ui/styles/colors';




const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 5,
    },
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    }

    handleTouchTap = () => {
        this.setState({
            open: true,
        });
    }

    render() {
        const standardActions = (
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={this.handleRequestClose}
            />
        );

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    {/*          <Dialog
                     open={this.state.open}
                     title="Super Secret Password"
                     actions={standardActions}
                     onRequestClose={this.handleRequestClose}
                     >
                     1-2-3-4-5
                     </Dialog>
                     <h1>Material-UI</h1>
                     <h2>example project</h2>
                     <RaisedButton
                     label="Super Secret Password"
                     secondary={true}
                     onTouchTap={this.handleTouchTap}
                     />*/}
                    <AppBar
                        title="List notification"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <MobileTearSheet>
                        <List>
                            <ListItem primaryText="SiGN縺ｧ縺ｧ縺阪ｋ縲√せ繝槭�縺ｧ螂ｽ縺ｾ繧後ｋ繝医ャ繝礼判蜒上�菴懊ｊ譁"           secondaryText={
                                <p>
                                    <span style={{color: darkBlack}}>2017/5/31</span> --
                                    BiND縺ｮ逕ｻ蜒冗ｷｨ髮�ｩ溯�縲郡iGN Pro縲阪ｒ菴ｿ縺｣縺ｦ縲√せ繝槭�縺ｧ螂ｽ縺ｾ繧後ｋ繝医ャ繝礼判蜒上ｒ菴懊ｋ縺ｨ縺阪�繝昴う繝ｳ繝医ｒ邏ｹ莉九＠縺ｦ縺�″縺ｾ縺吶�
                                </p>
                            }
                                      secondaryTextLines={2} leftIcon={<ActionInfo color={blueA400}/>} />

                            <ListItem primaryText="SiGN縺ｧ縺ｧ縺阪ｋ縲√せ繝槭�縺ｧ螂ｽ縺ｾ繧後ｋ繝医ャ繝礼判蜒上�菴懊ｊ譁"           secondaryText={
                                <p>
                                    <span style={{color: darkBlack}}>2017/5/31</span> --
                                    BiND縺ｮ逕ｻ蜒冗ｷｨ髮�ｩ溯�縲郡iGN Pro縲阪ｒ菴ｿ縺｣縺ｦ縲√せ繝槭�縺ｧ螂ｽ縺ｾ繧後ｋ繝医ャ繝礼判蜒上ｒ菴懊ｋ縺ｨ縺阪�繝昴う繝ｳ繝医ｒ邏ｹ莉九＠縺ｦ縺�″縺ｾ縺吶�
                                </p>
                            }
                                      secondaryTextLines={2} leftIcon={<ActionInfo color={blueA400}/>} />
                            <ListItem primaryText="SiGN縺ｧ縺ｧ縺阪ｋ縲√せ繝槭�縺ｧ螂ｽ縺ｾ繧後ｋ繝医ャ繝礼判蜒上�菴懊ｊ譁"           secondaryText={
                                <p>
                                    <span style={{color: darkBlack}}>2017/5/31</span> --
                                    BiND縺ｮ逕ｻ蜒冗ｷｨ髮�ｩ溯�縲郡iGN Pro縲阪ｒ菴ｿ縺｣縺ｦ縲√せ繝槭�縺ｧ螂ｽ縺ｾ繧後ｋ繝医ャ繝礼判蜒上ｒ菴懊ｋ縺ｨ縺阪�繝昴う繝ｳ繝医ｒ邏ｹ莉九＠縺ｦ縺�″縺ｾ縺吶�
                                </p>
                            }
                                      secondaryTextLines={2} leftIcon={<ActionInfo color={pinkA200}/>} />
                        </List>
                    </MobileTearSheet>
                </div>

            </MuiThemeProvider>
        );
    }
}

let MobileTearSheet = React.createClass({

    propTypes: {
        height: React.PropTypes.number
    },

    getDefaultProps() {
        return {
            height: 500
        };
    },

    render() {

        let styles = {
            root: {
                float: 'left',
                marginBottom: 24,
                marginRight: 24,
                width: 360

            },

            container: {
                border: 'solid 1px #d9d9d9',
                borderBottom: 'none',
                height: this.props.height,
                overflow: 'hidden'
            },

            bottomTear: {
                display: 'block',
                position: 'relative',
                marginTop: -10,
                width: 360
            }
        };

        return (
            <div style={Object.assign({},styles.root,this.props.style||{})}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
                <div style={styles.bottomTear}>
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 360 10" enableBackground="new 0 0 360 10">
                        <polygon fill="#DAD9D9" points={`359,0 359,7.5 352.5,0.5 345,8.5 337.5,0.5 330,8.5 322.5,0.5 315,8.5 307.5,0.5 300,8.5 292.5,0.5
            285,8.5 277.5,0.5 270,8.5 262.5,0.5 255,8.5 247.5,0.5 240,8.5 232.5,0.5 225,8.5 217.5,0.5 210,8.5 202.5,0.5 195,8.5 187.5,0.5
            180,8.5 172.5,0.5 165,8.5 157.5,0.5 150,8.5 142.5,0.5 135,8.5 127.5,0.5 120,8.5 112.5,0.5 105,8.5 97.5,0.5 90,8.5 82.5,0.5
            75,8.5 67.5,0.5 60,8.5 52.5,0.5 45,8.5 37.5,0.5 30,8.5 22.5,0.5 15,8.5 7.5,0.5 1,7.5 1,0 0,0 0,10 7.5,2 15,10 22.5,2 30,10
            37.5,2 45,10 52.5,2 60,10 67.5,2 75,10 82.5,2 90,10 97.5,2 105,10 112.5,2 120,10 127.5,2 135,10 142.5,2 150,10 157.5,2 165,10
            172.5,2 180,10 187.5,2 195,10 202.5,2 210,10 217.5,2 225,10 232.5,2 240,10 247.5,2 255,10 262.5,2 270,10 277.5,2 285,10
            292.5,2 300,10 307.5,2 315,10 322.5,2 330,10 337.5,2 345,10 352.5,2 360,10 360,0 `}/>
                    </svg>
                </div>
            </div>
        );
    }

});

export default Main;
