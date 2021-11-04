import { useState, SyntheticEvent } from 'react';
import {
  Box,
  IconButton,
  Tooltip,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Drawer,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Autocomplete,
  ListItemAvatar,
  makeStyles,
  RadioGroup,
  FormControlLabel,
  Radio,
  Popover
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import { formatDistance, subMinutes } from 'date-fns';
import CallTwoToneIcon from '@material-ui/icons/CallTwoTone';
import VideoCameraFrontTwoToneIcon from '@material-ui/icons/VideoCameraFrontTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import NotificationsOffTwoToneIcon from '@material-ui/icons/NotificationsOffTwoTone';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import BlockTwoToneIcon from '@material-ui/icons/BlockTwoTone';
import ListIcon from '@material-ui/icons/List';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import GroupAddTwoToneIcon from '@material-ui/icons/GroupAddTwoTone';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { accessHistory, addMessages, addNewPeopleGroup, changeGroup, changeGroupName, createGroup, createGroupMessage, leaveGroup, leftMessages, messageApiById, noAccessHistory, removeMessages, removeUser, userApiFecth, userByIdFetch } from 'src/slices/messenger';
import './responsive.css'
import SidebarContent from './SidebarContent';

const RootWrapper = experimentalStyled(Box)(
  ({ theme }) => `
          display: flex;
          align-items: center;
          justify-content: space-between;
          height :10px;
`
);

const ListItemIconWrapper = experimentalStyled(ListItemIcon)(
  ({ theme }) => `
        min-width: 36px;
        color: ${theme.colors.primary.light};
`
);

const AccordionSummaryWrapper = experimentalStyled(AccordionSummary)(
  ({ theme }) => `
        &.Mui-expanded {
          min-height: 48px;
        }

        .MuiAccordionSummary-content.Mui-expanded {
          margin: 12px 0;
        }

        .MuiSvgIcon-root {
          transition: ${theme.transitions.create(['color'])};
        }

        &.MuiButtonBase-root {

          margin-bottom: ${theme.spacing(0.5)};

          &:last-child {
            margin-bottom: 0;
          }

          &.Mui-expanded,
          &:hover {
            background: ${theme.colors.alpha.black[10]};

            .MuiSvgIcon-root {
              color: ${theme.colors.primary.main};
            }
          }
        }
`
);

const useStyles = makeStyles({
  dialog: {
    position: 'absolute',
    top: '-10%',
    left: '33%',
    width: '15%',
    height: 300
  },
  dialogaction: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: '10px',
  },
  groupAction: {
    display: 'flex',
  },
  list: {
    display: 'flex',
    flexDirection: 'column'
  },
  listcontent: {
    height: '200px',
    minWidth: '220px',
  },
  close: {
    display: 'none',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: '20px'
  },
  listItem: {
    display: "flex",
    '&:hover': {
      backgroundColor: "rgba(0, 0, 0,0.3)",
      cursor: 'pointer'
    },
    '&:hover > button': {
      display: 'flex',
      cursor: 'pointer'
    }
  },
  editGroupButton: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    marginLeft: '10px',
    cursor: 'pointer',
    fontSize: '22px',
    transform: 'scaleX(-1)'
  }
});

function TopBarContent() {

  const { userData, userById } = useSelector((state: RootState) => state.messages);
  const classes = useStyles();

  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [title, setTitle] = useState('');
  const [pevTitle, setPevTitle] = useState('');
  const [openAddPeople, setOpenAddPeople] = useState(false);
  const [openAddPeopleDialogBox, setOpenAddPeopleDialogBox] = useState(false);
  const [openRemoveUserDialogBox, setOpenRemoveUserDialogBox] = useState(false);
  const [openLeaveDialogBox, setOpenLeaveDialogBox] = useState(false);
  const [groupTitle, setGroupTitle] = useState('');
  const [addPeopleText, setAddPeopleText] = useState([]);
  const [groupUsers, setGroupUsers] = useState([]);
  const [accessHistoryValue, setAccessHistoryValue] = useState("no");
  const [removeId, setRemoveId] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userListIntheGroup, setuserListIntheGroup] = useState(null);
  const [changeGroupNameBox, setchangeGroupNameBox] = useState(null);
  const [removeName, setRemoveName] = useState('');
  const [groupId, setGroupId] = useState(null);
  const [expanded, setExpanded] = useState<string | false>('section1');

  const handleAccessHistoryChangeRadio = (event): void => {
    setAccessHistoryValue(event.target.value);
  };
  const dispatch = useDispatch();

  const userLeft = userById.length ? userById[0].participant[0].left : false;
  let users = [];
  const mainUser = {
    threadId: 0,
    title: "Randy Smith",
    isMeeting: false,
    isDeleted: false,
    markAsUnread: false,
    isFav: false,
    isPinned: false,
    isHidden: false,
    participant: [{
      userId: "00010203-0405-0607-0809-0a0b0c0d0e0f",
      userName: "Randy Smith",
      accessFrom: "2021-09-08T13:53:12.596364",
      left: false,
      removed: false,
      options: {
        canDelete: false,
        canEdit: false
      }
    }]
  }
  if (userData.length && userById.length) {
    users = userData.filter(val => ((val.threadId !== userById[0].threadId) && (val.participant.length === 1)));
  }
  let groupPeople;
  let userList = [];
  if (userById.length) {
    groupPeople = userById[0].participant.length > 1 ? true : false;
    userList = userById[0].participant.filter(val => val.removed === false)
    users = users.filter((elem) => !userList.find(({ userId }) => elem.participant[0].userId === userId));
  }

  const handleCloseDialogBox = (): void => {
    setOpenAddPeople(false);
    setOpenAddPeopleDialogBox(false);
    setOpenRemoveUserDialogBox(false);
    setOpenLeaveDialogBox(false);
    setuserListIntheGroup(null);
    setchangeGroupNameBox(null);
  };

  const handleClickOpenDialogBox = (): void => {
    handleCloseDialogBox();
    setOpenAddPeople(true);
  };

  const handleClickOpenDialogAddPeople = (): void => {
    handleCloseDialogBox();
    setOpenAddPeopleDialogBox(true);
  };

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuToggle = (): void => {
    setMenuOpen(!menuOpen)
  }
  const groupTitleHandler = (e): void => {
    setGroupTitle(e.target.value);
  }
  const openListUserGroup = Boolean(userListIntheGroup);
  const idListUserInGroup = openListUserGroup ? 'simple-popover' : null;

  const groupNameBox = Boolean(changeGroupNameBox);
  const idChangeGroupName = groupNameBox ? 'simple-popover' : null;

  const handleClickShowPeople = (event): void => {
    event.stopPropagation();
    setuserListIntheGroup(event.currentTarget);
  }

  let newUser = [];
  const addPeopleTextHandler = (e, value): void => {
    if (users.length) {
      value.forEach((title) => {
        newUser.push(users.filter(val => val.title === title)[0].participant[0]);
      })
      newUser.unshift(userById[0].participant[0])
      setGroupUsers(newUser)
    }
    setAddPeopleText(value);
  }
  const userAddHandler = (): void => {
    if (groupPeople && addPeopleText) {
      const messageForAccess = accessHistoryValue === 'no' ? false : true
      const groupInfo = { id: userById[0].threadId, participants: addPeopleText, historyMsg: messageForAccess, participantsInfo: groupUsers, user: mainUser.participant[0].userName };
      dispatch(addNewPeopleGroup(groupInfo))
      accessHistoryValue === 'no' ? dispatch(noAccessHistory(groupInfo)) : dispatch(accessHistory(groupInfo));
      handleCloseDialogBox();
      dispatch(addMessages(groupInfo))
      dispatch(userApiFecth());
      dispatch(userByIdFetch(userById[0].threadId))
      dispatch(messageApiById(groupInfo.id));
      setAddPeopleText([]);
      setGroupTitle('');
      setGroupUsers([]);
    }
    else if (addPeopleText.length > 0) {
      groupUsers.unshift(mainUser.participant[0]);
      addPeopleText.push(userById[0].title);
      const groupInfo = { title: groupTitle, participants: addPeopleText, participantsInfo: groupUsers, user: mainUser.participant[0].userName };
      const data = { id: userData.length, participants: addPeopleText, user: mainUser.participant[0].userName }
      dispatch(createGroup(groupInfo));
      handleCloseDialogBox();
      setAddPeopleText([]);
      dispatch(userApiFecth());
      dispatch(createGroupMessage(data))
      setGroupTitle('');
      setGroupUsers([]);
    }
  }

  const leaveHandler = (): void => {
    handleCloseDialogBox();
    const data = { id: userById[0].threadId, userId: userById[0].participant[0].userId, userName: userById[0].participant[0].userName }
    dispatch(leftMessages(data))
    dispatch(leaveGroup(data));
    dispatch(userApiFecth());
    dispatch(userByIdFetch(userById[0].threadId))
    dispatch(messageApiById(data.id));

  }

  const openConfomDialogforuser = (e): void => {
    setRemoveId(e.target.id);
    setRemoveName(e.target.value);
    setOpenRemoveUserDialogBox(true)
    setuserListIntheGroup(null)
  }

  const openConfomDialogforleave = (): void => {
    setOpenLeaveDialogBox(true)
    setuserListIntheGroup(null)
  }
  const removeUserHandler = (e): void => {
    const data = { id: userById[0].threadId, userId: removeId, userName: removeName, user: mainUser.participant[0].userName }
    dispatch(removeMessages(data))
    dispatch(removeUser(data));
    dispatch(userByIdFetch(userById[0].threadId))
    dispatch(messageApiById(data.id));
    setOpenRemoveUserDialogBox(false)
  }

  const handleChange = (section: string) => (
    event: SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? section : false);
  };

  const editGroupName = (e): void => {
    setPevTitle(userById[0].title);
    setTitle(userById[0].title);
    setGroupId(Number(e.target.id));
    e.stopPropagation();
    setchangeGroupNameBox(e.currentTarget);
  }
  const groupnameonchange = (e): void => {
    setTitle(e.target.value);
  }
  const handleGroupName = (): void => {
    setchangeGroupNameBox(null);
    const data = {
      id: groupId,
      prevTitle: pevTitle,
      title: title,
      user: mainUser.participant[0].userName
    }
    dispatch(changeGroup(data))
    dispatch(userByIdFetch(data.id))
    dispatch(changeGroupName(data));
    dispatch(userApiFecth());
    dispatch(messageApiById(data.id))
  }
  return (
    <>
      {userById.length ?
        <RootWrapper>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title={formatDistance(subMinutes(new Date(), 8), new Date(), {
              addSuffix: true
            })}>
              <Avatar
                variant="rounded"
                sx={{ width: 30, height: 30 }}
                alt="Zain Baptista"
                src="/static/images/avatars/1.jpg"
              />
            </Tooltip>
            <Box style={{ marginLeft: '10px' }}>
              <Typography variant="h4" gutterBottom>
                {userById.length ? userById[0].title : null}
              </Typography>
            </Box>
            {groupPeople ?
              <Tooltip arrow placement="bottom" title="Name group chat">
                <button aria-describedby={idChangeGroupName} disabled={userLeft ? true : false} className={classes.editGroupButton} onClick={editGroupName} id={userById[0].threadId.toString()}>
                  &#9998;
                </button>
              </Tooltip> : null}
          </Box>
          <Box
          >

            {userById.length ?
              <div style={{ display: 'flex' }}>
                {groupPeople ?
                  <Tooltip placement="bottom" title={t('View and add participants')} >
                    <IconButton color="primary" onClick={handleClickShowPeople} disabled={userLeft ? true : false}>
                      <GroupAddTwoToneIcon />
                    </IconButton>
                  </Tooltip>
                  :
                  <Tooltip placement="bottom" title={t('Add people')} >
                    <IconButton color="primary" onClick={handleClickOpenDialogBox} >
                      <AddCircleOutlineTwoToneIcon />
                    </IconButton>
                  </Tooltip>}
                <Tooltip placement="bottom" title={t('Start a voice call')}>
                  <IconButton color="primary" disabled={userLeft ? true : true}>
                    <CallTwoToneIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip placement="bottom" title={t('Start a video call')}>
                  <IconButton color="primary" disabled={userLeft ? true : true}>
                    <VideoCameraFrontTwoToneIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip placement="bottom" title={t('Conversation information')}>
                  <IconButton color="primary" onClick={handleDrawerToggle} >
                    <InfoTwoToneIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip placement="bottom" title={t('Menu')}>
                  <IconButton color="primary" onClick={handleMenuToggle} className="menuvisible">
                    <ListIcon />
                  </IconButton>
                </Tooltip>
              </div>
              :
              <div style={{ display: 'flex' }}>
                <Tooltip placement="bottom" title={t('Start a voice call')}>
                  <IconButton color="primary" disabled={true}>
                    <CallTwoToneIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip placement="bottom" title={t('Start a video call')}>
                  <IconButton color="primary" disabled={true}>
                    <VideoCameraFrontTwoToneIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip placement="bottom" title={t('Conversation information')}>
                  <IconButton color="primary" onClick={handleDrawerToggle} >
                    <InfoTwoToneIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip placement="bottom" title={t('Menu')}>
                  <IconButton color="primary" onClick={handleMenuToggle} className="menuvisible">
                    <ListIcon />
                  </IconButton>
                </Tooltip>
              </div>
            }
          </Box>
        </RootWrapper>
        : 
        <RootWrapper>
        <Tooltip placement="bottom" title={t('Menu')}>
          <IconButton color="primary" onClick={handleMenuToggle} className="menuvisible">
            <ListIcon />
          </IconButton>
        </Tooltip>
        </RootWrapper>}
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        elevation={9}
      >
        <Box sx={{ minWidth: 360 }} p={2}>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                mx: 'auto',
                my: 2,
                width: theme.spacing(12),
                height: theme.spacing(12)
              }}
              variant="rounded"
              alt="Zain Baptista"
              src="/static/images/avatars/1.jpg"
            />
            <Typography variant="h4">Zain Baptista</Typography>
            <Typography variant="subtitle2">
              {t('Active')}{' '}
              {formatDistance(subMinutes(new Date(), 7), new Date(), {
                addSuffix: true
              })}
            </Typography>
          </Box>
          <Divider sx={{ my: 3 }} />

          <Accordion
            expanded={expanded === 'section1'}
            onChange={handleChange('section1')}
          >
            <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">{t('Customize Chat')}</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetails sx={{ p: 0 }}>
              <List component="nav">
                <ListItem button>
                  <ListItemIconWrapper>
                    <SearchTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary={t('Search in Conversation')}
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'section2'}
            onChange={handleChange('section2')}
          >
            <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">{t('Privacy & Support')}</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetails sx={{ p: 0 }}>
              <List component="nav">
                <ListItem button>
                  <ListItemIconWrapper>
                    <NotificationsOffTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary={t('Turn off notifications')}
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <CancelTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary={t('Ignore all messages')}
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <BlockTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary={t('Block user')}
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'section3'}
            onChange={handleChange('section3')}
          >
            <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">{t('Shared Files')}</Typography>
            </AccordionSummaryWrapper>
            <AccordionDetails sx={{ p: 0 }}>
              <List component="nav">
                <ListItem button>
                  <ListItemIconWrapper>
                    <DescriptionTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary={t('HolidayPictures.zip')}
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary={t('You opened in the past year')}
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <DescriptionTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary={t('2021Screenshot.jpg')}
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary={t('You edited this file yesterday')}
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIconWrapper>
                    <DescriptionTwoToneIcon />
                  </ListItemIconWrapper>
                  <ListItemText
                    primary={t('PresentationDeck.pdf')}
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary={t('Never opened')}
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Drawer>
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
        open={menuOpen}
        onClose={handleMenuToggle}
        elevation={9}
      >
        <Box sx={{ maxWidth: 290 }} p={2}>
          <SidebarContent />
        </Box>
      </Drawer>

      <Dialog open={openAddPeople} >
        <DialogTitle id="form-dialog-title">Add People</DialogTitle>
        <DialogContent style={{overflow: 'hidden'}}>
          <TextField
            autoFocus
            margin="dense"
            placeholder="Group name (optional)"
            style={{ "width": "280px" }}
            variant="standard"
            onChange={groupTitleHandler}
          />
          <Autocomplete
            multiple
            id="free-solo-2-demo"
            disableClearable
            options={users.map((option) => option.title)}
            onChange={addPeopleTextHandler}
            renderInput={(params) => (
              <TextField
                {...params}
                margin="dense"
                placeholder="Enter name, email or tag"
                InputProps={{ ...params.InputProps, type: 'search' }}
                style={{ "width": "280px" }}
                variant="standard"
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogBox} color="primary">
            Cancel
          </Button>
          <Button onClick={userAddHandler} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Popover
        id={idListUserInGroup}
        open={openListUserGroup}
        anchorEl={userListIntheGroup}
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
        <div className={classes.listcontent}>
          <Scrollbars autoHide>
            {userList.length && userList.map((value, index) => {
              return (
                <ListItem className={classes.listItem} key={index}>
                  <ListItemAvatar>
                    <Avatar alt="icon" src="" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={value.userName}
                  />
                  {index === 0 ? null :
                    <button className={classes.close} id={value.userId} value={value.userName} onClick={openConfomDialogforuser}>
                      &#10006;</button>
                  }
                </ListItem>
              )
            })}
          </Scrollbars>
        </div>
        <div className={classes.dialogaction}>
          <Button onClick={handleClickOpenDialogAddPeople} color="primary">
            <GroupAddTwoToneIcon /> <span style={{ marginLeft: '20px' }}>Add People </span>
          </Button>
          <Divider />
          <Button onClick={openConfomDialogforleave} color="primary" >
            <ExitToAppTwoToneIcon /><span style={{ marginLeft: '20px' }}>Leave Group</span>
          </Button>
        </div>
      </Popover>
      <Popover
        id={idChangeGroupName}
        open={groupNameBox}
        anchorEl={changeGroupNameBox}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{ height: '180px' }}>
        <div id="form-dialog-title" style={{ margin: '5px 10px', fontWeight: 'bold' }}>Group Name</div>
        <DialogContent style={{overflow: 'hidden'}}>
          <TextField
            margin="dense"
            value={title}
            style={{ "width":"280px" }}
            variant="standard"
            onChange={groupnameonchange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogBox} color="primary">
            Cancel
          </Button>
          <Button onClick={handleGroupName} color="primary">
            Save
          </Button>
        </DialogActions>
      </Popover>
      <Dialog open={openAddPeopleDialogBox} >
        <DialogTitle id="form-dialog-title">Add People</DialogTitle>
        <DialogContent style={{overflow: 'hidden'}}>
          <Autocomplete
            multiple
            id="free-solo-2-demo"
            disableClearable
            options={users.map((option) => option.title)}
            onChange={addPeopleTextHandler}
            renderInput={(params) => (
              <TextField
                {...params}
                margin="dense"
                placeholder="Enter name, email or tag"
                InputProps={{ ...params.InputProps, type: 'search' }}
                style={{ "width": "280px" }}
                variant="standard"
              />
            )}
          />
          <RadioGroup aria-label="gender" name="gender1" value={accessHistoryValue} onChange={handleAccessHistoryChangeRadio}>
            <FormControlLabel value="no" control={<Radio />} label="Don't include chat history" />
            <FormControlLabel value="full" control={<Radio />} label="Include all chat history" />
          </RadioGroup>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialogBox} color="primary">
            Cancel
          </Button>
          <Button onClick={userAddHandler} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openRemoveUserDialogBox}
        onClose={handleCloseDialogBox}
        
      >
        <DialogTitle id="alert-dialog-title">{`Remove ${removeName} from the conversation?`}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialogBox} color="primary">
            Cancel
          </Button>
          <Button onClick={removeUserHandler} color="primary" autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openLeaveDialogBox}
        onClose={handleCloseDialogBox}
        
      >
        <DialogTitle id="alert-dialog-title">{`Leave the conversation?`}</DialogTitle>
        <DialogContent>
          You'll still have access to the chat history.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogBox} color="primary">
            Cancel
          </Button>
          <Button onClick={leaveHandler} color="primary" autoFocus>
            Leave
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TopBarContent;
