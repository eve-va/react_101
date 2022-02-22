import { createStore } from "redux"

//action
function increment() {
    return {
        type: "INCREMENT"
    }
}

function decrement() {
    return {
        type: "DECREMENT"
    }
}

function reducer(state = {count: 0}, action) {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
