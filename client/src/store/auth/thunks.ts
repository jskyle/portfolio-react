import Auth from "../../utils/auth";

const auth = new Auth();

export const handleAuthentication = (props: any) => {
  if (props.location.hash) {
    auth.handleAuth();
  };
};
