export type AuthReducerState = {
  isLoggedIn: boolean;
};

export type LoginActionPayload = {
  token: string;
  // data: {name: string; email: string;}
};
