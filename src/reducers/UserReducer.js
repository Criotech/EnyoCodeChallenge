import { USER_FORM, USER_SUBMIT, DELETE_USER, EDIT_USER, TOGGLE_MODAL } from '../actions/types';

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
        case USER_SUBMIT:
            return { ...state, ...INITIAL_STATE, id: state.id+1, userData: [ ...state.userData, action.payload ]  }
        case DELETE_USER: 
            return { ...state, userData: [ ...state.userData.filter((user) => {return user.id !== action.payload}) ] }
        case EDIT_USER:
            return { ...state, edit: true, ...action.payload }
        default:
            return state;
    }
}