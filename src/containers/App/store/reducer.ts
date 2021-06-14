import { Reducer } from "react";
import { AppLanguage, TAppActions, TAppStore } from "./types";

const initState: TAppStore = {
  loading: false,
  shouldRefresh: false,
  locale: AppLanguage["vi"],
};

const AppReducer: Reducer<TAppStore, any> = (
  state = initState,
  actions: TAppActions
) => {
  switch (actions.type) {
    default:
      return { ...state };
  }
};

export default AppReducer;
