import { APP_CHANGE_LOADING, APP_CHANGE_LOCALE } from "./constants";
import { action } from "typesafe-actions";
import { AppLanguage } from "./types";

export const changeLocale = (locale: AppLanguage) =>
  action(APP_CHANGE_LOCALE, locale);

export const changeLoading = () => action(APP_CHANGE_LOADING);
