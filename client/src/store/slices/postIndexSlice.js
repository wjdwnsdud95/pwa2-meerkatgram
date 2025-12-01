import { createSlice } from '@reduxjs/toolkit';
import { postIndexThunk } from '../thunks/postIndexThunk.js';

const initialState = {
  list: null,
  page: 0,
}

const slice = createSlice({
  name: 'postIndex',
  initialState,
  reducers: {
    clearPostIndex(state) {
      state.list = null;
      state.page = 0;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postIndexThunk.fulfilled, (state, action) => {
        const { posts, page } = action.payload.data;

        // 리스트가 비어있는지 체크
        if(state.list) {
          state.list = [...state.list, ...action.payload.data.posts]; // 기존 action은 프로미스
        }
        else {
          // list가 이미 존재한다면 기존 데이터에 새로 받은 데이터를 추가
          state.list = posts;
        }

        // 현재 페이지 저장
        state.page = page;

      })
  }
});

export const {
  clearPostIndex,
} = slice.actions;

export default slice.reducer;