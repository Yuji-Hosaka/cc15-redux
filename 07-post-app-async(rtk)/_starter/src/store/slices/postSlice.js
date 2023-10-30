import { creatSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../utils/apiURL";

const initialState = {
  postsData: [],
  loading: false,
  error: "",
};

// thunk action creator => 1 fn come from 3 funcs. = 4 funcs (Redux only)
// thunk action create => 1 func only (Redux toolkit + createAsyncThunk)

/** createAsyncThunk 
 * AutoGenerate 3 states of Promise
posts/fetchPosts/pending
posts/fetchPosts/fulfilled
posts/fetchPosts/rejected
 */

// fetchPosts == Thunk Action creator = Async Action Creator
export const fetchPostsAction = createAsyncThunk(
  "posts/fetchPosts",
  async (payload,thunkAPI) => {
    try {
      //Make HTTP request
      const response = await axios.get(apiUrl);
      console.log(response.data);
      return response.data;
    } catch (error) {

      return thunkAPI.rejectWithValue(error.message)
      console.log(error);
    }
  }
);

const postSlice = creatSlice({
  name: "postSlice",
  initialState: initialState,
  reducers: {
    // method: SYNC operation
  },

  extraReducers: (builder) => {
    //Async operation
    builder
      .addCase(fetchPostsAction.fulfilled, (state, action) => {
        state.postsData = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchPostsAction.pending, (state, action) => {
        state.postsData = [];
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchPostsAction.rejected, (state, action) => {
        state.postsData = [];
        state.loading = false;
        state.error = action.payload
      });
  },
});

// gen postReducer
const postReducer = postSlice.reducer;
export default postReducer;
