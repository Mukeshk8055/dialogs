import { ListSubheader, List } from '@material-ui/core';
import { useLocation, matchPath } from 'react-router-dom';
import SidebarMenuItem from './item';
import  { MenuItem } from './items';
import { experimentalStyled } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'src/store';

const MenuWrapper = experimentalStyled(List)(
  ({ theme }) => `
    margin-bottom: ${theme.spacing(1)};

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-size: ${theme.typography.pxToRem(13)};
      color: ${theme.sidebar.menuItemHeadingColor};
      padding: ${theme.spacing(1, 3)};
      line-height: 1.5;
    }
`
);

const SubMenuWrapper = experimentalStyled(List)(
  ({ theme }) => `
    &.MuiList-root {

      .MuiListItem-root {
        padding: 1px;
        padding-left: ${theme.spacing(0)};
        padding-right: ${theme.spacing(0)};

        .MuiButton-label {
          display: flex;
          position: relative;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(2)};

            .MuiBadge-standard {
              background: ${theme.colors.primary.main};
              font-size: ${theme.typography.pxToRem(12)};
              color: ${theme.palette.primary.contrastText};
            }
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.sidebar.menuItemColor};
          background-color: ${theme.sidebar.menuItemBg};
          width: 100%;
          border-radius: 0;
          justify-content: flex-start;
          font-size: ${theme.typography.pxToRem(14)};
          padding: ${theme.spacing(3)};
          padding-top: ${theme.spacing(1)};
          padding-bottom: ${theme.spacing(1)};

          &:after {
            content: '';
            position: absolute;
            height: 100%;
            right: 0;
            top: 0;
            width: 0;
            opacity: 0;
            transition: ${theme.transitions.create(['opacity', 'width'])};
            background: ${theme.sidebar.menuItemColorActive};
            border-top-left-radius: ${theme.general.borderRadius};
            border-bottom-left-radius: ${theme.general.borderRadius};
          }
    
          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            font-size: ${theme.typography.pxToRem(26)};
            margin-right: ${theme.spacing(1.5)};
            color: ${theme.sidebar.menuItemIconColor};
          }
          
          .MuiButton-endIcon {
            margin-left: auto;
            font-size: ${theme.typography.pxToRem(22)};
          }

          &.Mui-active,
          &:hover {
            background-color: ${theme.sidebar.menuItemBgActive};
            color: ${theme.sidebar.menuItemColorActive};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
                color: ${theme.sidebar.menuItemIconColorActive};
            }
          }

          &.Mui-active {
            &:after {
              width: 5px;
              opacity: 1;
            }
          }
        }

        &.Mui-children {
          flex-direction: column;
          line-height: 1;

          .MuiButton-root.Mui-active {
            &:after {
              opacity: 0;
            }
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px;
            padding-left: ${theme.spacing(0)};
            padding-right: ${theme.spacing(0)};

            .MuiButton-root {
              font-size: ${theme.typography.pxToRem(13)};
              padding: ${theme.spacing(0.5, 2, 0.5, 3.6)};
              font-weight: normal;

              &:before {
                content: '';
                background: ${theme.sidebar.menuItemIconColor};
                opacity: .8;
                transition: ${theme.transitions.create(['background'])};
                width: 7px;
                height: 6px;
                border-radius: 20px;
                margin-right: ${theme.spacing(2.9)};
              }

              &.Mui-active,
              &:hover {
                background-color: ${theme.sidebar.menuItemBg};

                &:before {
                  background: ${theme.sidebar.menuItemIconColorActive};
                }

                &:after {
                  opacity: 0;
                }
              }
            }
          }
        }
      }
    }
`
);

function renderSidebarMenuItems({
  items,
  path
}: {
  items: MenuItem[];
  path: string;
}) {
  return (
    <SubMenuWrapper>
      {items.reduce((ev, item) => reduceChildRoutes({ ev, item, path }), [])}
    </SubMenuWrapper>
  );
}

function reduceChildRoutes({
  ev,
  path,
  item
}: {
  ev: any[];
  path: string;
  item: MenuItem;
}) {
  const key = item.name;

  if (item.items) {
    const open = matchPath(path, {
      path: item.link,
      exact: false
    });

    ev.push(
      <SidebarMenuItem
        key={key}
        open={Boolean(open)}
        name={item.name}
        icon={item.icon}
        badge={item.badge}
      >
        {renderSidebarMenuItems({
          path,
          items: item.items
        })}
      </SidebarMenuItem>
    );
  } else {
    ev.push(
      <SidebarMenuItem
        key={key}
        name={item.name}
        link={item.link}
        badge={item.badge}
        icon={item.icon}
      />
    );
  }

  return ev;
}

function SidebarMenu() {
  const location = useLocation();
  const { t }: { t: any } = useTranslation();
  const { MenuItems } = useSelector((state) => state.sideBar);

  return (
    <>
      {MenuItems.map((section) => (
        <MenuWrapper
          key={section.heading}
          subheader={
            <ListSubheader disableSticky>{t(section.heading)}</ListSubheader>
          }
        >
          {renderSidebarMenuItems({
            items: section.items,
            path: location.pathname
          })}
        </MenuWrapper>
      ))}
    </>
  );
}

export default SidebarMenu;
