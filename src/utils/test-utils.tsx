// import type { PropsWithChildren, ReactElement } from "react";

// import type { RenderOptions } from "@testing-library/react";
// import { render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { Provider } from "react-redux";

// import type { AppStore, RootState } from "../store/store";
// import appStore from "../store/store";

// interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
//   preloadedState?: Partial<RootState>;
//   store?: AppStore;
// }

// export const renderWithProviders = (ui: ReactElement) => {
//   const Wrapper = <Provider store={appStore}>{ui}</Provider>;

//   return render(ui, { wrapper: Wrapper });
// };
