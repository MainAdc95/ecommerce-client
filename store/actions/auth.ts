import { IUser } from "../../interfaces/user";
import { AuthActionTypes } from "../types/auth";

export const authSetUser = (user: IUser, token?: string): AuthActionTypes => ({
    type: "AUTH_SET_USER",
    user,
    token,
});

export const authRemoveUser = (): AuthActionTypes => ({
    type: "AUTH_REMOVE_USER",
});

export const authSetLoading = (): AuthActionTypes => ({
    type: "AUTH_SET_LOADING",
});

export const authRemoveLoading = (): AuthActionTypes => ({
    type: "AUTH_REMOVE_LOADING",
});
