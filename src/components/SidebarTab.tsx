import React from "react";
import { SidebarTab, type SidebarTabProps } from "./SidebarTab.style";

const SidebarTabComponent = (props: SidebarTabProps) => {
  return (
    <SidebarTab.Root status={props.status}>
      <SidebarTab.Content>
        {props.icon}
        <SidebarTab.Inbox>{props.label}</SidebarTab.Inbox>
      </SidebarTab.Content>
    </SidebarTab.Root>
  );
};

export { SidebarTabComponent as SidebarTab };
