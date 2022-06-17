import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  user: null,
  statusCode: null,
  message: null,
  authenticationCode: null,
  logginType: null,
};

// login user
export const login = createAsyncThunk(
  "auth/login_username",
  async (userData, thunkAPI) => {
    try {
      return authService.login(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// login user with email
export const loginWithEmail = createAsyncThunk(
  "auth/login_email",
  async (userData, thunkAPI) => {
    try {
      return authService.loginWithEmail(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// register user
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return authService.registerUser(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.statusCode = null;
      state.message = null;
      state.authenticationCode = null;
      state.logginType = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.user = null;
        state.statusCode = null;
        state.message = null;
        state.authenticationCode = null;
        state.logginType = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.statusCode = action.payload.status;
        state.message = action.payload.message;
        state.authenticationCode = action.payload.authenticationCode;
        state.logginType = action.payload.logginType;
      })
      .addCase(loginWithEmail.pending, (state) => {
        state.user = null;
        state.statusCode = null;
        state.message = null;
        state.authenticationCode = null;
        state.logginType = null;
      })
      .addCase(loginWithEmail.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.statusCode = action.payload.status;
        state.message = action.payload.message;
        state.authenticationCode = action.payload.authenticationCode;
        state.logginType = action.payload.logginType;
      })
      .addCase(registerUser.pending, (state) => {
        state.user = null;
        state.statusCode = null;
        state.message = null;
        state.authenticationCode = null;
        state.logginType = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.statusCode = action.payload.status;
        state.message = action.payload.message;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
