import { useContext } from "react";
import { NestedIntlContext } from "./NestedIntlContext";

const useNestedIntlContext = () => {
  return useContext(NestedIntlContext);
};

export default useNestedIntlContext;
