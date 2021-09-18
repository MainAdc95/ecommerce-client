import { IUser } from "../../interfaces/user";
import {
    AUTH_REMOVE_LOADING,
    AUTH_REMOVE_USER,
    AUTH_SET_LOADING,
    AUTH_SET_USER,
} from "../actionTypes";

type AuthSetUser = {
    type: typeof AUTH_SET_USER;
    user: IUser;
    token?: string;
};

type AuthRemoveUser = {
    type: typeof AUTH_REMOVE_USER;
};

type AuthSetLoading = {
    type: typeof AUTH_SET_LOADING;
};

type AuthRemoveLoading = {
    type: typeof AUTH_REMOVE_LOADING;
};

export type AuthActionTypes =
    | AuthSetUser
    | AuthRemoveUser
    | AuthRemoveLoading
    | AuthSetLoading;

export interface AuthState {
    user: IUser | null;
    loading: boolean;
}
