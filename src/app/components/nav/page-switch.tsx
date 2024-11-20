import React from "react";

interface pageSwitch {
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function page({ onClick, ...rest }: pageSwitch) {
  return <a href="#" onClick={onClick} {...rest} />;
}
