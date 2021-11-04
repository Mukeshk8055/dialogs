import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store'
import { ReactNode } from 'react';


const menuItems: MenuItems[] = [
  {
    heading: 'Home',
    items: [
      {
        name: 'Dashboard',
        icon: "AnalyticsTwoToneIcon",
        link: '/dashboard'
      },
      {
        name: 'Events',
        icon: "VideocamIcon",
        link: '/events'
      },
       {
        name: 'Dailogs',
        icon: "VideocamIcon",
        link: '/dailogs'
      },
      {
        name: 'Projects',
        icon: "EventNoteTwoToneIcon",
        link: '/projects',
        badge: 'New'
      },
      {
        name: 'Messaging',
        icon: "EventNoteTwoToneIcon",
        link: '/messaging',
      }]
  },
  {
    heading: 'Support',
    items: [
      {
        name: 'Documentation',
        icon: "SupportTwoToneIcon",
        link: '/docs'
      }
    ]
  }
];


export interface MenuItem {
    link?: string;
    icon?: ReactNode;
    badge?: string;
    items?: MenuItem[];
    name: string;
  }
  
  export interface MenuItems {
    items: MenuItem[];
    heading: string;
  }

  interface MenuState {
    MenuItems: MenuItems[],
  }
  const initialState: MenuState = {
    MenuItems: [],
  };
const slice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    getmenu(state: MenuState, action: PayloadAction<{ menuItems: MenuItems[]; }>) {
     
     const { menuItems } = action.payload;
    state.MenuItems = menuItems;
    }

  }
});

export const reducer = slice.reducer;

export const getMenu = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.getmenu({menuItems}));
};


export default slice;
