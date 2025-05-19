import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginUserSuccess, (state, { userInfo }) => ({
    ...state,
    isAuthenticated: true,
    user: userInfo
  })),
  on(AuthActions.logoutUser, (state) => ({
    ...state,
    isAuthenticated: false,
    user: null
  }))
);
