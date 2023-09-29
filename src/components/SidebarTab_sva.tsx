import { css } from "../../styled-system/css";
import React from "react";
import { VividSidebarTab, type SidebarTabProps } from "./SidebarTab.sva";

export const SidebarTab = (props: SidebarTabProps) => {
  const classes = VividSidebarTab(props);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {props.icon}
        <div className={classes.inbox}>{props.label}</div>
      </div>
    </div>
  );
};
