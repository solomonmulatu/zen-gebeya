import {createSelector} from "reselect";

const selectUser=state=>state.user;

export const selecetCurrentUser=createSelector(
    [selectUser],
    (user)=>user.currentUser
)