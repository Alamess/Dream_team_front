"use client"
import React, { createContext,useState,useContext } from 'react';

export const SideContext = createContext();

export const SideProvider = (props) => {
    const [sidebar,setsidebar]=useState(false);
    const handleSidebar = ()=>{
      setsidebar(!sidebar);
    }

    const value = {
        sidebar,
        setsidebar,
        handleSidebar
    };

    return <SideContext.Provider value={value}>{props.children}</SideContext.Provider>;
};
export function useSide() {
    return useContext(SideContext);
  }