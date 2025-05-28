import { createAction, props } from '@ngrx/store';

export const loginUser = createAction('[User] Login User', props<{ username: string; password: string }>());

export const loginUserSuccess = createAction('[User] Login User Success', props<{ userInfo: string }>());

export const logoutUser = createAction('[User] Logout User');
