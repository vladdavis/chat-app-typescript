import { combineReducers } from 'redux';

import user from './user';
import messages from './messages';
import { StoreState } from '../types/index';

const rootReducer = combineReducers<StoreState>({ user, messages });

export default rootReducer;
