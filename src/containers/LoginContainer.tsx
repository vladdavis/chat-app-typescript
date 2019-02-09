import { connect } from 'react-redux';

import Login from '../components/login/Login';
import { signIn } from '../actions/user';
import { IStoreState } from '../types/index';

const mapStateToProps = (state: IStoreState) => ({
  user: state.user
})

export default connect(mapStateToProps, { signIn })(Login);
