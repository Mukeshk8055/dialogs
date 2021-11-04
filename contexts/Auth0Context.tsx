import { FC, ReactNode, createContext, useEffect, useReducer } from 'react';
import { User } from 'src/models/user';
import SuspenseLoader from 'src/components/SuspenseLoader';
import UserService from '../services/UserService'

interface AuthState {
  isInitialised: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

export interface AuthContextValue extends AuthState {
  method: 'Auth0';
  loginWithPopup: (options?: any) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

type InitialiseAction = {
  type: 'INITIALISE';
  payload: {
    isAuthenticated: boolean;
    user: User | null;
  };
};

type LoginAction = {
  type: 'LOGIN';
  payload: {
    user: User;
  };
};

type LogoutAction = {
  type: 'LOGOUT';
};

type RegisterAction = {
  type: 'REGISTER';
};

type Action = InitialiseAction | LoginAction | LogoutAction | RegisterAction;

const initialAuthState: AuthState = {
  isAuthenticated: false,
  isInitialised: false,
  user: null
};

const reducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case 'INITIALISE': {
      const { isAuthenticated, user } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
        user
      };
    }
    case 'LOGIN': {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext<AuthContextValue>({
  ...initialAuthState,
  method: 'Auth0',
  loginWithPopup: () => Promise.resolve(),
  logout: () => {},
});

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const loginWithPopup = async (options) => {
    await UserService.doLogin(options);

    const isAuthenticated = await UserService.isLoggedIn();

    if (isAuthenticated) {
      const user = await UserService.getUserInfo();
      console.log("----user",user)
      dispatch({
        type: 'LOGIN',
        payload: {
          user: {
            id: user.sub,
            jobtitle: 'Lead Developer',
            avatar: user.picture,
            email: user.email,
            name: user.name,
            role: user.role,
            location: user.location,
            username: user.preferred_username,
            posts: user.posts,
            coverImg: user.coverImg,
            followers: user.followers,
            description: user.description
          }
        }
      });
    }
  };

  const logout = async() => {

    await UserService.doLogout();
    dispatch({
      type: 'LOGOUT'
    });
  };

  useEffect(() => {
    const initialise = async () => {
      try {

        const isAuthenticated = await UserService.isLoggedIn();

        if (isAuthenticated) {
          const user = await UserService.getUsername();
console.log(user)
          dispatch({
            type: 'INITIALISE',
            payload: {
              isAuthenticated,
              user: {
                id: user.sub,
                jobtitle: 'Lead Developer',
                avatar: user.picture,
                email: user.email,
                name: user,
                role: user.role,
                location: user.location,
                username: user,
                posts: user.posts,
                coverImg: user.coverImg,
                followers: user.followers,
                description: user.description
              }
            }
          });
        } else {
          dispatch({
            type: 'INITIALISE',
            payload: {
              isAuthenticated,
              user: null
            }
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALISE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    };

    initialise();
  }, []);

  if (!state.isInitialised) {
    return <SuspenseLoader />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'Auth0',
        loginWithPopup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;