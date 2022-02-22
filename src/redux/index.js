import {applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"

export function increment() {
    return (dispatch, getState) => {
        const number = getState()
        const baseUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        fetch(`${baseUrl}`)
            .then(res => res.json())
            .then(res => {
                console.log(res[number]);
                dispatch({
                    type: "INCREMENT",
                    payload: res[number]
                })
            })
    }
}
export function decrement() {
    return {
        type: "DECREMENT"
    }
}

function reducer(count = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count - 1
        default:
            return count
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
export default store;
