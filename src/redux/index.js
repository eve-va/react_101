import {combineReducers, createStore} from "redux"
import countReducer from "./count"
import favoriteThingsReducer from "./favoriteThings"
import youTubeVideoReducer from "./youTubeVideo"

const rootReducer = combineReducers({
    count: countReducer,
    favoriteThings: favoriteThingsReducer,
    youTubeVideo: youTubeVideoReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

export default store;
