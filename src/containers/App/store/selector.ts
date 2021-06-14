import rootReducer from "@common/redux/rootReducer";

const appSelector = (state: ReturnType<typeof rootReducer>) => state.AppReducer;
export default appSelector;
