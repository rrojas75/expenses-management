import { ActionReducerMap, combineReducers } from '@ngrx/store';
import { AuthState, authReducer } from './auth/auth.reducer';

export interface CoreState {
  auth: AuthState;
}

export const coreReducers: ActionReducerMap<CoreState> = {
  auth: authReducer,
};
  
export const coreReducer = combineReducers<CoreState>(coreReducers);