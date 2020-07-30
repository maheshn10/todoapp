import {
    FilterTypes
} from '../actions/actionTypes';

const filterType = 'All'



const filterReducer = (state = filterType, action) => {
    switch (action.type) {
        case FilterTypes.FILTERBY:
            return action.payload.filterType;                
        default:
            return state;
    }
}

export default filterReducer;