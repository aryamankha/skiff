import React from "react";
import { VividSidebarTab, type SidebarTabProps } from "./SidebarTab.sva";

export const SidebarTab = (props: SidebarTabProps) => {
  return (
    <VividSidebarTab.Root status={props.status}>
      <VividSidebarTab.Content>
        {props.icon}
        <VividSidebarTab.Inbox>{props.label}</VividSidebarTab.Inbox>
      </VividSidebarTab.Content>
    </VividSidebarTab.Root>
  );
};
