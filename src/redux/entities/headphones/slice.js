import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getHeadphones } from "./get-headhones";

export const entityAdapter = createEntityAdapter();

export const headphonesSlice = createSlice({
  name: "headphones",
  // initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  initialState: entityAdapter.getInitialState(),
  // selectors: {
  //   selectRequestStatus: (state) => state.requestStatus,
  // },
  extraReducers: (builder) =>
    builder
      // .addCase(getHeadphones.pending, (state) => {
      //   state.requestStatus = "pending";
      // })
      // .addCase(getHeadphones.rejected, (state) => {
      //   state.requestStatus = "rejected";
      // })
      .addCase(getHeadphones.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);

        // state.requestStatus = "fulfilled";
      }),
});

export const { selectRequestStatus } = headphonesSlice.selectors;

const selectHeadphonesSlice = (state) => state.headphones;

export const {
  selectIds: selectHeadphonesIds,
  selectById: selectHeadphoneById,
  selectTotal: selectHeadphonesTotal,
} = entityAdapter.getSelectors(selectHeadphonesSlice);
