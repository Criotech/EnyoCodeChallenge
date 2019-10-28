import { USER_FORM, TOGGLE_MODAL, USER_UPDATED, USER_DELETED } from '../actions/types';

const INITIAL_STATE = {
    visible: false,
    firstName: '',
    lastName: '',
    age: '',
    birthday: '',
    hobby: '',
    id: "",
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
            return { ...state, ...INITIAL_STATE, userData: [ ...state.userData, action.payload ] }
        case USER_DELETED:
            return { ...state, userData: [ ...state.userData.filter((user) => {return user.id !== action.payload}) ] }
        default:
            return state;
    }
}