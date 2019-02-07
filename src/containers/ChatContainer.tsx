import { connect } from 'react-redux';

import Chat from '../components/chat/Chat';
//import { getMessages, sendMessage } from "../actions/messages";
import { getMessages, sendMessage } from "../actions/messages";
import { StoreState } from '../types/index';
import { Dispatch } from 'redux';


const mapStateToProps = (state: StoreState) => ({
  user: state.user,
  messages: state.messages.data,
  messagesError: state.messages.error
})


export default connect(mapStateToProps, { getMessages, sendMessage })(Chat);
