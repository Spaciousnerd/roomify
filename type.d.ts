interface AuthState {
  isSignedIn: Boolean;
  username: String | null;
  userId: String | null;
}
type AuthContext = {
  isSignedIn: Boolean;
  username: String | null;
  userId: String | null;
  refreshAuth: () => Prmoise<Boolean>;
  signOut: () => Prmoise<Boolean>;
  signIn: () => Prmoise<Boolean>;
};
