import { connect } from 'react-redux';

import Chat from '../components/chat/Chat';
//import { getMessages, sendMessage } from "../actions/messages";
import { getMessages, sendMessage } from "../actions/messages";
import { IStoreState } from '../types/index';

const mapStateToProps = (state: IStoreState) => ({
  user: state.user,
  messages: state.messages.data,
  messagesError: state.messages.error
})

export default connect(mapStateToProps, { getMessages, sendMessage })(Chat);
