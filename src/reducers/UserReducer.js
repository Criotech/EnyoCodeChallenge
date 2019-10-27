import { USER_FORM, TOGGLE_MODAL, USER_UPDATED, USER_DELETED } from '../actions/types';

const INITIAL_STATE = {
    visible: false,
    firstName: '',
    lastName: '',
    age: '',
    birthday: '',
    hobby: '',
    id: 0,
    userData: [],
    edit: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return { ...state, visible: !state.visible }
        case USER_FORM:
            return { ...state, [action.payload.prop]: action.payload.value }
        case USER_UPDATED:
            return { ...state, ...INITIAL_STATE, id: state.id+1, userData: [ ...state.userData, action.payload ] }
        default:
            return state;
    }
}