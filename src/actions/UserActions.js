import { USER_FORM, TOGGLE_MODAL, USER_CREATED, USER_UPDATED,  USER_DELETED } from './types'

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

//firebase
export const add_User = user => {
     return {
        type: USER_CREATED,
        payload: user
     }
}

export const update_User = user => {
     return {
        type: USER_UPDATED,
        payload: user
    }
}

export const delete_User = userId => {
     return {
        type: USER_DELETED,
        payload: userId
     }
}