import React, {Component,createContext} from 'react';

const AppContext = createContext();

class AppProvider extends Component {
    state = {
        seeWelcome: true,
        currentChatId: null,
        currentUserInfo: null,
    };
    takeALook = () => {
        this.setState({
            seeWelcome: true
        })
    };
    setUserInfo = (id,user) => {
        this.setState({
            currentChatId: id,
            currentUserInfo: user,
        })
    }
    render() {
        return (
            <AppContext.Provider value={{...this.state, takeALook: this.takeALook, setUserInfo: this.setUserInfo}}   >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export {AppProvider, AppContext};