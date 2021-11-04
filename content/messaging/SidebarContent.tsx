import { useState, ChangeEvent } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Avatar,
  List,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Popover,
  Autocomplete,
  Dialog,
  DialogTitle,
  DialogActions,
  Tooltip,
  DialogContent
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import Label from 'src/components/Label';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import { addUserToChatApi, deleteUser, hidden, markAsUnreadApi, messageApiById, muted, pin, readByUser, userApiFecth, userByIdFetch } from 'src/slices/messenger';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { ListItemIcon } from '@material-ui/core';

const RootWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(2.5)};
  `
);

const ListItemWrapper = experimentalStyled(ListItem)(
  ({ theme }) => `
        &.MuiButtonBase-root {
            margin: ${theme.spacing(0.5)} 0;
        }
  `
);

const TabsContainerWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        .MuiTabs-indicator {
            min-height: 4px;
            height: 4px;
            box-shadow: none;
            border: 0;
        }

        .MuiTab-root {
            &.MuiButtonBase-root {
                padding: 0;
                margin-right: ${theme.spacing(3)};
                font-size: ${theme.typography.pxToRem(14)};
                color: ${theme.colors.alpha.black[50]};

                .MuiTouchRipple-root {
                    display: none;
                }
            }

            &.Mui-selected {
                color: ${theme.colors.alpha.black[100]};
            }
        }
  `
);


const useStyles = makeStyles({
  list: {
    display: 'flex',
    '&:hover > div': {
      opacity: 1
    }
  },
  options: {
    height: '100%',
    opacity: 0,
    alignItems: 'center',
    fontSize: '16px',
    '&:hover': {
      color: 'red'
    }
  },
  root: {
    width: '100%',
    maxWidth: 240,
  },
  countMessage: {
    marginTop: '10px',
    marginLeft: '-22px',
    marginRight: '14px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '16px',
    width: '16px',
    borderRadius: '50%',
    backgroundColor: 'red',
    fontSize: '12px',
    fontWeight: 'bold',
  }
});
function SidebarContent() {

  const dispatch = useDispatch()
  const { t }: { t: any } = useTranslation();
  const classes = useStyles();

  const { userData, userById } = useSelector((state: RootState) => state.messages);
  const [selectedIndex, setSelectedIndex] = useState(userData.length - 1);
  const [userId, setUserId] = useState(null);
  const [openAddUser, setOpenAddUser] = useState(false);
  const [addUserInChat, setAddUserInChat] = useState([]);
  const [openDeleteUserDialogBox, setOpenDeleteUserDialogBox] = useState(false);
  const [openSidebarActionHandler, setopenSidebarActionHandler] = useState(null);
  const [currentTab, setCurrentTab] = useState<string>('all');

  const userdata = userData && userData.filter(value => value.threadId !== 0)

  const isPHMM = { isPinned: false, isHidden: false, markAsUnread: false, mute: false };
  const { isPinned, isHidden, markAsUnread, mute } = userById.length ? userById[0] : isPHMM;


  const handleClickForOpenActionInSideBar = (event): void => {
    event.stopPropagation();
    setUserId(Number(event.target.id))
    setopenSidebarActionHandler(event.currentTarget);
    setSelectedIndex(Number(event.target.id));
    dispatch(userByIdFetch(Number(event.target.id)))
    dispatch(messageApiById(Number(event.target.id)));
  };

  const userAddToChat = userData ? userData.filter(value => !("lastUpdated" in value)) : []
  const validUserData = userData ? userData.filter(value => (value.isHidden !== true) && (value.isDeleted !== true) && (value.isPinned !== true) && ("lastUpdated" in value)) : []
  const pinnedUserData = userData ? userData.filter(value => value.isPinned === true) : []
  const unreadUserData = userData ? userData.filter(value => value.lastMessageId > 0 && (value.isHidden !== true)) : []
  const hiddenUserData = userData ? userData.filter(value => value.isHidden === true) : []
  const sortArrayValidUser = validUserData.sort((a, b) => new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime());

  let countUnreadMessages = 0;
  unreadUserData.forEach(unreadUser => countUnreadMessages += unreadUser["lastMessageId"])
  let countPinUnreadMessages = 0;
  pinnedUserData.forEach(unreadUser => countPinUnreadMessages += unreadUser["lastMessageId"])
  let countHideUnreadMessages = 0;
  hiddenUserData.forEach(unreadUser => countHideUnreadMessages += unreadUser["lastMessageId"])

  const handleCloseDialogBox = (e): void => {
    e.stopPropagation();
    setopenSidebarActionHandler(null);
    setOpenDeleteUserDialogBox(false);
    setOpenAddUser(false);
  };

  const actionForDialogBox = Boolean(openSidebarActionHandler);
  const idForDialogBox = actionForDialogBox ? 'simple-popover' : null;

  const openDialogBoxToAddUser = (): void => {
    setOpenAddUser(true)
  }
  const handleClickForChangeUser = (event, index: number, participantId: number): void => {
    setSelectedIndex(index);
    dispatch(userByIdFetch(index));
    dispatch(messageApiById(index));
    const data = {
      id: index,
      userId: participantId
    }
    dispatch(readByUser(data))
    dispatch(userApiFecth())
  };

  const openDeleteDialogBox = () => {
    setopenSidebarActionHandler(null);
    setOpenDeleteUserDialogBox(true);
  }
  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const markasunread = (e): void => {
    handleCloseDialogBox(e);
    dispatch(markAsUnreadApi(userId))
    dispatch(userApiFecth());
  }

  const pinned = (e): void => {
    handleCloseDialogBox(e);
    dispatch(pin(userId))
    dispatch(userApiFecth());
  }
  const deleted = (e): void => {
    handleCloseDialogBox(e);
    dispatch(deleteUser(userId))
    dispatch(userApiFecth())
  }
  const muteFun = (e): void => {
    handleCloseDialogBox(e);
    dispatch(muted(userId))
    dispatch(userApiFecth());
  }

  const hiddend = (e): void => {
    handleCloseDialogBox(e);
    dispatch(hidden(userId))
    dispatch(userApiFecth());
  }

  const userSearchForName = (e, value): void => {
    const arr = userData.filter(val => val.title === value);
    const id = arr[0].threadId;
    setSelectedIndex(id)
    dispatch(userByIdFetch(id));
    dispatch(messageApiById(id));
  }

  const userAddForName = (e, value): void => {
    const arr = userData.filter(val => val.title === value);
    setAddUserInChat(arr)
  }

  const addUserToChat = (): void => {
    if (addUserInChat) {
      const index = addUserInChat[0].threadId;
      setOpenAddUser(false);
      dispatch(addUserToChatApi(index))
    }
  }
  return (
    <>
      <RootWrapper>
        <Autocomplete
          id="free-solo-2-demo"
          freeSolo
          disableClearable
          onChange={userSearchForName}
          options={userdata.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ mt: 2, mb: 1 }}
              margin="dense"
              size="small"
              placeholder={t('Search...')}
              InputProps={{
                ...params.InputProps, type: 'search', startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                )
              }}
              fullWidth
            />
          )}
        />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ mb: 1, mt: 1 }} variant="h4">
            {t('Chats')}
          </Typography>
          <Tooltip placement="bottom" title={t('Add User')} >
            <button style={{ border: 'none', outline: 'none', backgroundColor: 'transparent' }} onClick={openDialogBoxToAddUser}>
              <AddCircleOutlineTwoToneIcon fontSize="small" />
            </button>
          </Tooltip>
        </div>

        <TabsContainerWrapper>
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab value="all" label="All" />
            {(countUnreadMessages === 0) ? null : (countUnreadMessages < 99) ? <span className={classes.countMessage}>{countUnreadMessages}</span> : <span className={classes.countMessage} style={{ width: '22px', height: '18px' }}>99+</span>}

            <Tab value="unread" label="Unread" />
            {(countUnreadMessages === 0) ? null : (countUnreadMessages < 99) ? <span className={classes.countMessage}>{countUnreadMessages}</span> : <span className={classes.countMessage} style={{ width: '22px', height: '18px' }}>99+</span>}

            <Tab value="pinned" label="Pinned" />
            {(countPinUnreadMessages === 0) ? null : (countPinUnreadMessages < 99) ? <span className={classes.countMessage}>{countPinUnreadMessages}</span> : <span className={classes.countMessage} style={{ width: '22px', height: '18px' }}>99+</span>}

            <Tab value="hidden" label="Hidden" />
            {(countHideUnreadMessages === 0) ? null : (countHideUnreadMessages < 99) ? <span className={classes.countMessage}>{countHideUnreadMessages}</span> : <span className={classes.countMessage} style={{ width: '22px', height: '18px' }}>99+</span>}
          </Tabs>
        </TabsContainerWrapper>
        {validUserData.length ?
          <Box mt={1}>
            {currentTab === 'all' && (
              <>
                <List component="div">
                  {pinnedUserData && pinnedUserData.reverse().map((value, index) => {
                    return (
                      <ListItemWrapper key={index} button className={classes.list} selected={selectedIndex === value.threadId}
                        onClick={(event) => handleClickForChangeUser(event, value.threadId, value.participant[0].userId)}>
                        <ListItemAvatar>
                          {value.mute ?
                            <NotificationsOffIcon />
                            :
                            <Avatar src="/static/images/avatars/1.jpg" />
                          }
                        </ListItemAvatar>
                        <ListItemText
                          sx={{ mr: 1 }}
                          primaryTypographyProps={{
                            color: 'textPrimary',
                            variant: 'h5',
                            noWrap: true
                          }}
                          secondaryTypographyProps={{
                            color: 'textSecondary',
                            noWrap: true
                          }}
                          primary={value.title}
                          secondary="Hey there, how are you today? Is it ok if I call you?"
                        />
                        <b style={{ fontSize: '22px' }}>&#128392;</b>
                        {(value.lastMessageId !== 0) ?
                          <Label color="primary">
                            <b>{value.lastMessageId}</b>
                          </Label> : null}
                        <div aria-describedby={idForDialogBox} className={classes.options} onClick={handleClickForOpenActionInSideBar} id={value.threadId.toString()}>
                          •••
                        </div>
                      </ListItemWrapper>
                    )
                  })}
                </List>
                <List component="div" >
                  {sortArrayValidUser && sortArrayValidUser.reverse().map((value, index) => {
                    return (
                      <ListItemWrapper button key={index} className={classes.list} selected={selectedIndex === value.threadId}
                        onClick={(event) => handleClickForChangeUser(event, value.threadId, value.participant[0].userId)}>
                        <ListItemAvatar>
                          {value.mute ?
                            <NotificationsOffIcon />
                            :
                            <Avatar src="/static/images/avatars/1.jpg" />
                          }
                        </ListItemAvatar>
                          <ListItemText
                            sx={{ mr: 1 }}
                            primaryTypographyProps={{
                              color: 'textPrimary',
                              variant: 'h5',
                              noWrap: true
                            }}
                            secondaryTypographyProps={{
                              color: 'textSecondary',
                              noWrap: true,
                            }}
                            primary={value.title}
                            secondary="hey, Are you here?"
                          />
                        {(value.lastMessageId !== 0) ?
                          <Label color="primary">
                            <b>{value.lastMessageId}</b>
                          </Label> : null}
                        <div aria-describedby={idForDialogBox} className={classes.options} onClick={handleClickForOpenActionInSideBar} id={value.threadId.toString()}>
                          •••
                        </div>
                      </ListItemWrapper>
                    )
                  })}
                </List>
              </>
            )}
            {currentTab === 'unread' && (
              <List component="div">
                {unreadUserData && unreadUserData.slice(0).reverse().map((value, index) => {
                  return (
                    <ListItemWrapper key={index} button className={classes.list} selected={selectedIndex === value.threadId}
                      onClick={(event) => handleClickForChangeUser(event, value.threadId, value.participant[0].userId)}>
                      <ListItemAvatar>
                        {value.mute ?
                          <NotificationsOffIcon />
                          :
                          <Avatar src="/static/images/avatars/1.jpg" />
                        }
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ mr: 1 }}
                        primaryTypographyProps={{
                          color: 'textPrimary',
                          variant: 'h5',
                          noWrap: true
                        }}
                        secondaryTypographyProps={{
                          color: 'textSecondary',
                          noWrap: true,
                          fontWeight: 'bold',
                        }}
                        primary={value.title}
                        secondary="Hey there, how are you? today Is it ok if I call you?"
                      />
                      {(value.lastMessageId !== 0) ?
                        <Label color="primary">
                          <b>{value.lastMessageId}</b>
                        </Label> : null}
                      <div aria-describedby={idForDialogBox} className={classes.options} onClick={handleClickForOpenActionInSideBar} id={value.threadId.toString()}>
                        •••
                      </div>
                    </ListItemWrapper>
                  )
                })}
              </List>
            )}

            {currentTab === 'pinned' && (
              <List component="div">
                {pinnedUserData && pinnedUserData.reverse().map((value, index) => {
                  return (
                    <ListItemWrapper key={index} button className={classes.list} selected={selectedIndex === value.threadId}
                      onClick={(event) => handleClickForChangeUser(event, value.threadId, value.participant[0].userId)}>
                      <ListItemAvatar>
                        {value.mute ?
                          <NotificationsOffIcon />
                          :
                          <Avatar src="/static/images/avatars/1.jpg" />
                        }
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ mr: 1 }}
                        primaryTypographyProps={{
                          color: 'textPrimary',
                          variant: 'h5',
                          noWrap: true
                        }}
                        secondaryTypographyProps={{
                          color: 'textSecondary',
                          noWrap: true
                        }}
                        primary={value.title}
                        secondary="Hey there, how are you today? Is it ok if I call you?"
                      />
                      {(value.lastMessageId !== 0) ?
                        <Label color="primary">
                          <b>{value.lastMessageId}</b>
                        </Label> : null}
                      <div aria-describedby={idForDialogBox} className={classes.options} onClick={handleClickForOpenActionInSideBar} id={value.threadId.toString()}>
                        •••
                      </div>
                    </ListItemWrapper>
                  )
                })}
              </List>
            )}
            {currentTab === 'hidden' && (
              <List component="div">
                {hiddenUserData && hiddenUserData.reverse().map((value, index) => {
                  return (
                    <ListItemWrapper key={index} button className={classes.list} selected={selectedIndex === value.threadId}
                      onClick={(event) => handleClickForChangeUser(event, value.threadId, value.participant[0].userId)}>
                      <ListItemAvatar>
                        {value.mute ?
                          <NotificationsOffIcon />
                          :
                          <Avatar src="/static/images/avatars/1.jpg" />
                        }
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ mr: 1 }}
                        primaryTypographyProps={{
                          color: 'textPrimary',
                          variant: 'h5',
                          noWrap: true
                        }}
                        secondaryTypographyProps={{
                          color: 'textSecondary',
                          noWrap: true
                        }}
                        primary={value.title}
                        secondary="Hey there, how are you today? Is it ok if I call you?"
                      />
                      {(value.lastMessageId !== 0) ?
                        <Label color="primary">
                          <b>{value.lastMessageId}</b>
                        </Label> : null}
                      <div aria-describedby={idForDialogBox} className={classes.options} onClick={handleClickForOpenActionInSideBar} id={value.threadId.toString()}>
                        •••
                      </div>
                    </ListItemWrapper>
                  )
                })}
              </List>
            )}


          </Box>
          : <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>No one in the chat.</div>}
        <div>
          <Popover
            id={idForDialogBox}
            open={actionForDialogBox}
            anchorEl={openSidebarActionHandler}
            onClose={handleCloseDialogBox}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <div className={classes.root}>
              <List component="nav">
                <ListItem button onClick={markasunread}>
                  <ListItemIcon >
                    <MarkunreadIcon />
                  </ListItemIcon>
                  {markAsUnread ?
                    <ListItemText primary="Mark as read" />
                    :
                    <ListItemText primary="Mark as Unread" />
                  }
                </ListItem>
                {isHidden ? null :
                  <>
                    <Divider />
                    <ListItem button onClick={pinned}>
                      <ListItemIcon>
                        <PushPinIcon />
                      </ListItemIcon>
                      {isPinned ?
                        <ListItemText primary="UnPin" />
                        :
                        <ListItemText primary="Pin" />
                      }
                    </ListItem>
                  </>}
                <Divider />
                <ListItem button onClick={muteFun}>
                  {mute ?
                    <>
                      <ListItemIcon>
                        <NotificationsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Unmute" />
                    </>
                    :
                    <>
                      <ListItemIcon>
                        <NotificationsOffIcon />
                      </ListItemIcon>
                      <ListItemText primary="Mute" />
                    </>
                  }
                </ListItem>
                {isPinned ?
                  null :
                  <>
                    <Divider />
                    <ListItem button onClick={hiddend}>
                      {isHidden ?
                        <>
                          <ListItemIcon>
                            <VisibilityIcon />
                          </ListItemIcon>
                          <ListItemText primary="Unhide" />
                        </>
                        :
                        <>
                          <ListItemIcon>
                            <VisibilityOffIcon />
                          </ListItemIcon>
                          <ListItemText primary="Hide" />
                        </>
                      }
                    </ListItem>
                  </>
                }
                <Divider />
                <ListItem button onClick={openDeleteDialogBox}>
                  <ListItemIcon>
                    <DeleteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Delete" />
                </ListItem>
              </List>
            </div>
          </Popover>
        </div >
      </RootWrapper >
      <Dialog
        open={openDeleteUserDialogBox}
        onClose={handleCloseDialogBox}
      >
        <DialogTitle id="alert-dialog-title">{`Are you sure you want to Delete this user?`}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialogBox} color="primary">
            Cancel
          </Button>
          <Button onClick={deleted} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openAddUser} >
        <DialogTitle id="form-dialog-title">Add User to Chat</DialogTitle>
        <DialogContent style={{overflow: 'hidden'}}>
          <Autocomplete
            id="free-solo-2-demo"
            freeSolo
            disableClearable
            onChange={userAddForName}
            options={userAddToChat.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                placeholder={t('Search...')}
                style={{ "width": "280px" }}
                InputProps={{
                  ...params.InputProps, type: 'search', startAdornment: (
                    <InputAdornment position="start">
                      <SearchTwoToneIcon />
                    </InputAdornment>
                  )
                }}
                fullWidth
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogBox} color="primary">
            Cancel
          </Button>
          <Button onClick={addUserToChat} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

    </>
  );
}

export default SidebarContent;
