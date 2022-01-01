import BUY_CAKE from "./cakeTypes";

const initialState = {
    numOfCAkes: 20,
};

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCAkes: state.numOfCAkes - action.payload,
            };
        default:
            return state;
    }
};

export default cakeReducer;