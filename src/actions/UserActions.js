import { USER_FORM, USER_SUBMIT, DELETE_USER, EDIT_USER, TOGGLE_MODAL } from './types'

export const toggleModal = () => {
    return {
        type: TOGGLE_MODAL
    }
}

export const userInputForm = ({ prop, value }) => {
    return {
        type: USER_FORM,
        payload: { prop, value }
    }
}

export const submitForm = (data) => {
    return {
        type: USER_SUBMIT,
        payload: data
    }
}

export const deleteUser = (data) => {
    return {
        type: DELETE_USER,
        payload: data
    }
}

export const editUser = (data) => {
    console.log(data)
    return {
        type: EDIT_USER,
        payload: data
    }
}