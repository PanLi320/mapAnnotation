import mapApp from "../reducers";
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {createStore, applyMiddleware, compose} from 'redux';

const configureStore = (initialState) => {
    const loggerMiddleware = createLogger();
    return createStore(mapApp, initialState,
        compose(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            ),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
};

export default configureStore;