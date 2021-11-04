import { FC, ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserService from "../../services/UserService";

interface AuthenticatedProps {
  children?: ReactNode;
}

const Authenticated: FC<AuthenticatedProps> = ({ children }) => {
  //const { isAuthenticated } = UserService.isLoggedIn();

  if (!UserService.isLoggedIn()) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
};

Authenticated.propTypes = {
  children: PropTypes.node
};

export default Authenticated;
