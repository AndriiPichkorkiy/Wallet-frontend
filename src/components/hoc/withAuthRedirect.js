import React from 'react';
import {Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.user.isLoggedIn
});
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to='/register' />
            return <Component {...this.props} />
        }
    }
   
    
    let ConectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent);
    return ConectedAuthRedirectComponent;
}