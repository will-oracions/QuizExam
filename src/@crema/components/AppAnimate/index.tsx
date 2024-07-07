import React, { memo } from "react";

type AppAnimateProps = {
  [x: string]: any;
};

const AppAnimate: React.FC<AppAnimateProps> = (props) => {
  return <div>{props.children}</div>;
};

export default memo(AppAnimate);
