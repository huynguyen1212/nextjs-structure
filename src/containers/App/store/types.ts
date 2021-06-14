import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type TAppStore = {
  loading: boolean;
  locale: AppLanguage;
  shouldRefresh: boolean;
};

export enum AppLanguage {
  vi = "vi",
  en = "en",
}

export type TAppActions = ActionType<typeof actions>;
