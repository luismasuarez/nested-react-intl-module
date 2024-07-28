import { useContext } from "react";
import { NestedIntlContext } from "../components/NestedIntlProvider";

const useNestedIntlContext = () => {
  return useContext(NestedIntlContext);
};

export default useNestedIntlContext;
