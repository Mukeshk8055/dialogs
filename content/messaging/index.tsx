import { useEffect, useRef } from 'react';
import ContentWrapper from 'src/components/ContentWrapper';
import TopBarContent from './TopBarContent';
import BottomBarContent from './BottomBarContent';
import SidebarContent from './SidebarContent';
import ChatContent from './ChatContent';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Box } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { userApiFecth } from 'src/slices/messenger';
import './responsive.css'

const RootWrapper = experimentalStyled(Box)(
  () => `
       height: 100%;
       display: flex;
`
);

const Sidebar = experimentalStyled(Box)(
  ({ theme }) => `
        width: 300px;
        background: ${theme.colors.alpha.white[100]};
        border-right: ${theme.colors.alpha.black[10]} solid 1px;
`
);

const ChatWindow = experimentalStyled(Box)(
  () => `
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
        
`
);

const ChatTopBar = experimentalStyled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.white[100]};
        border-bottom: ${theme.colors.alpha.black[10]} solid 1px;
        padding: ${theme.spacing(3)};
`
);

const ChatMain = experimentalStyled(Box)(
  () => `
        flex: 1;
`
);

const ChatBottomBar = experimentalStyled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(2)};
`
);


function ApplicationsMessenger() {
  const ref = useRef<any>(null);


  const dispatch = useDispatch();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollToBottom();
    }
  });
  useEffect(() => {
    dispatch(userApiFecth());
  }, [dispatch]);


  return (
    <ContentWrapper title="Messenger - Applications">
      <RootWrapper>
        <Sidebar className="desktop">
          <Scrollbars autoHide>
            <SidebarContent />
          </Scrollbars>
        </Sidebar>
        <ChatWindow>
          <ChatTopBar>
            <TopBarContent />
          </ChatTopBar>
          <ChatMain>
            <Scrollbars ref={ref} autoHide>
              <ChatContent />
            </Scrollbars>
          </ChatMain>
          <ChatBottomBar>
            <BottomBarContent />
          </ChatBottomBar >
        </ChatWindow>
      </RootWrapper>
    </ContentWrapper>
  );
}

export default ApplicationsMessenger;
