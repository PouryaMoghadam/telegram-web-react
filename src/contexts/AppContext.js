import React, {Component,createContext} from 'react';

const AppContext = createContext();

class AppProvider extends Component {
    state = {
        seeWelcome: true,
    };
    takeALook = () => {
        this.setState({
            seeWelcome: true
        })
    };
    render() {
        return (
            <AppContext.Provider value={{...this.state, takeALook: this.takeALook}}   >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export {AppProvider, AppContext};