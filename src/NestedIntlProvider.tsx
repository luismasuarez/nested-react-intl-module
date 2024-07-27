import React, { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

const NestedIntlProvider = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default NestedIntlProvider;
