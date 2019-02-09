import { combineReducers } from 'redux';

import user from './user';
import messages from './messages';
import { IStoreState } from '../types/index';

const rootReducer = combineReducers<IStoreState>({ user, messages });

export default rootReducer;
