// import { AuthEffects } from './auth/auth.effects';
import { ActionReducerMap } from '@ngrx/store';
import { coreReducer, CoreState } from './core/state/core.state';

// Consolidated Effects Array
export const appEffects = [
  //   AuthEffects,
  //   ExpenseEffects
];

export interface AppState {
  core: CoreState;
}

// Consolidated Reducers
export const appReducers: ActionReducerMap<AppState> = {
  core: coreReducer, // Nested Core Reducer
};
