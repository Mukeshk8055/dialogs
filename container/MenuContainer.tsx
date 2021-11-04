import { useEffect } from 'react';
import { useDispatch } from 'src/store';
import SidebarMenu from '../layouts/AccentSidebarLayout/Sidebar/SidebarMenu/index'
import {
    getMenu
} from 'src/slices/SideBar';

const MenuContainer = () =>{
   const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMenu());
      }, [dispatch]);  


    return (<SidebarMenu />)

}


export default MenuContainer;