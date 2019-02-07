import { connect } from 'react-redux';

import Login from '../components/login/Login';
import { signIn } from '../actions/user';
import { StoreState } from '../types/index';

const mapStateToProps = (state: StoreState) => ({
  user: state.user
})

export default connect(mapStateToProps, { signIn })(Login);
