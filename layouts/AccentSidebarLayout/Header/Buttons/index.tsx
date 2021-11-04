import { Box } from '@material-ui/core';
import HeaderSettings from './Settings';
import HeaderNotifications from './Notifications';

function HeaderButtons() {
  return (
    <Box sx={{ mr: 1 }}>
      <HeaderNotifications />
      <HeaderSettings />
    </Box>
  );
}

export default HeaderButtons;
