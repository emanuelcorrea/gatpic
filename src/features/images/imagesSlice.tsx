import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ImageProps } from "../../components/ImageCard";

export interface ImageState {
  title: string,
  results: ImageProps[],
  total: number
}

const initialState: ImageState = {
  title: '',
  results: [],
  total: 0
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    loadImages: (state: ImageState, action: PayloadAction<ImageState>) => {
      state.results = [...state.results, ...action.payload.results];
      state.title = action.payload.title;
      state.total = action.payload.total;
    },
    clearImages: (state: ImageState) => {
      state.results = []
    }
  }
})

export default imagesSlice.reducer;

export const { loadImages, clearImages } = imagesSlice.actions;
