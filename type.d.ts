interface AuthState {
  isSignedIn: Boolean;
  username: String | null;
  userId: String | null;
}
type AuthContext = {
  isSignedIn: Boolean;
  username: String | null;
  userId: String | null;
  refreshAuth: () => Promise<Boolean>;
  signOut: () => Promise<Boolean>;
  signIn: () => Promise<Boolean>;
};
