import { Box } from '@material-ui/core';
import HeaderSettings from './Settings';
// import HeaderSearch from './Search';
// import HeaderNotifications from './Notifications';

function HeaderButtons() {
  return (
    <Box sx={{ mr: 1 }}>
      {/* <HeaderSearch />     TO BE ADDED LATER
      <HeaderNotifications /> */}
      <HeaderSettings />
    </Box>
  );
}

export default HeaderButtons;
