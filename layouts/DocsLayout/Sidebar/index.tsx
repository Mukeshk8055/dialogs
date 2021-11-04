import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars-2';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import { NavLink as RouterLink } from 'react-router-dom';

const SidebarWrapper = experimentalStyled(Box)(
  ({ theme }) => `
  padding-top: ${theme.spacing(10)};
  width: ${theme.sidebar.width};
  color: ${theme.sidebar.textColor};
  background: ${theme.colors.alpha.white[100]};
  box-shadow: ${theme.sidebar.boxShadow};
  height: 100%;
  position: relative;
  z-index: 5;
`
);

const ListWrapper = experimentalStyled(List)(
  ({ theme }) => `
  .MuiListItem-button {
    margin: ${theme.spacing(0.5)} 0;
    color: ${theme.colors.alpha.black[70]};

    &:first-of-type {
      margin-top: 0;
    }

    &:hover {
      background-color: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.main};
    }
    
    &.Mui-selected {
      color: ${theme.colors.alpha.black[100]};
    }
  }
`
);

const links = [
  { id: '1', title: 'Introduction', url: '/docs/introduction' },
  { id: '2', title: 'Authentication', url: '/docs/authentication' },
  { id: '6', title: 'Installation', url: '/docs/installation' },
  { id: '5', title: 'Dependencies', url: '/docs/dependencies' },
  {
    id: '13',
    title: 'Themes Customization',
    url: '/docs/themes-customization'
  },
  { id: '9', title: 'Routing', url: '/docs/routing' },
  { id: '7', title: 'Internationalization', url: '/docs/internationalization' },
  { id: '10', title: 'RTL Layout', url: '/docs/rtl-layout' },
  { id: '11', title: 'Server Requests', url: '/docs/server-requests' },
  { id: '12', title: 'Starter Kits', url: '/docs/starter-kits' },
  { id: '3', title: 'Changelog', url: '/docs/changelog' },
  { id: '4', title: 'Contact Support', url: '/docs/contact-support' }
];

function Sidebar() {
  return (
    <SidebarWrapper>
      <Scrollbars autoHide>
        <Typography
          component="div"
          fontWeight="bold"
          color="text.primary"
          sx={{ pt: 2, px: 2 }}
          variant="caption"
        >
          Documentation
        </Typography>
        <ListWrapper sx={{ p: 2 }}>
          {links.map((link) => (
            <ListItem
              sx={{ pr: 0.5 }}
              key={link.id}
              button
              activeClassName="Mui-selected"
              component={RouterLink}
              to={link.url}
            >
              <ListItemText
                primaryTypographyProps={{ variant: 'h4' }}
                primary={link.title}
              />
              <ChevronRightTwoToneIcon />
            </ListItem>
          ))}
        </ListWrapper>
      </Scrollbars>
    </SidebarWrapper>
  );
}

export default Sidebar;
