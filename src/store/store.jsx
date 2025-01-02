import { Provider } from "react-redux";

import { store } from "./products.jsx";

export default function Store({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
