
import { Divider, List, ListItem, ListItemIcon, ListItemText, Tooltip, makeStyles, Popover, TextField, DialogTitle, Dialog, DialogActions, Button, ListItemAvatar } from '@material-ui/core';
import { Box, Card } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import UpdateSharpIcon from '@material-ui/icons/UpdateSharp';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { deleteEmoji, deleteMessage, editFalse, editTrue, emojiMessage, messageApiById, saveMessage } from 'src/slices/messenger';
import Picker from 'emoji-picker-react';
import FolderIcon from '@material-ui/icons/Folder';
import AttachFileTwoToneIcon from '@material-ui/icons/AttachFileTwoTone';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { Markup } from 'interweave';
import { Scrollbars } from 'react-custom-scrollbars-2';
import './responsive.css'

const CardWrapperPrimary = experimentalStyled(Card)(
  ({ theme }) => `
      background: ${theme.colors.primary.main};
      color: ${theme.palette.primary.contrastText};
      padding: ${theme.spacing(1)};
      border-radius: ${theme.general.borderRadiusXl};
      border-top-right-radius: ${theme.general.borderRadius};
      max-width: 380px;
      display: flex;
      flex-direction: column;
      word-break:break-all;
`
);

const Input = experimentalStyled('input')({
  display: 'none',
});

const useStyles = makeStyles((theme) => ({
  files: {
    margin: "2px 0px",
    maxWidth: '450px',
    display: "grid",
    flexDirection: "column",
    padding: "8px 4px",
    wrap: "nowrap",
    borderRadius: "12px 4px 12px 12px rgba(211,232,247)",
  },
  file: {
    display: 'flex',
    padding: '3px',
    margin: '3px',
    backgroundColor: 'rgb(246,248,251)',
    borderRadius: '3px',
    boxShadow: '0px 0px 2px 1px gray'
  },
  fromborder: {
    padding: '8px',
    backgroundColor: "rgba(211,232,247,0.2)",
    boxShadow: '0px 0px 1px 1px rgba(211,232,247)',
    borderRadius: '5px',

  },
  time: {
    fontSize: "10px",
    color: "black"
  },
  reactions: {
    display: 'none',
  },
  box: {
    '&:hover > div': {
      display: 'flex',
    }
  },
  reaction: {
    margin: '0 2px',
    cursor: 'pointer',
    '&:hover': {
      fontSize: '1.3em',
    }
  },
  root: {
    width: '100%',
    maxWidth: 240,
  },
  root1: {
    flexGrow: 1,
    maxWidth: 400,
    maxHeight: 250,
    overflowY: "auto",
    borderRadius: "5px",
  },
  list: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  button: {
    background: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
    fontSize: "14px",
    '&:hover': {
      color: "red",
      fontWeight: "bold"
    }
  },
  icon: {
    display: 'flex',
    '& > span': {
      marginLeft: '10px'
    }
  },
  editIcon: {
    padding: '5px',
    margin: '5px 5px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
  },
  editBox: {
    display: 'flex',
    width: '400px',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  edited: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

interface value {
  name: string,
  size: number
}

const reactionsOptions = ['👍', '❤️', '😀', '😲', '🙁', '😡'];


function ChatContent() {

  const classes = useStyles();
  const dispatch = useDispatch();

  const { userById, messageByIdData, message } = useSelector((state: RootState) => state.messages);
  const [openEditMessageBox, setopenEditMessageBox] = useState(null);
  const [openEmojiBox, setopenEmojiBox] = useState(null);
  const [messageId, setMessageId] = useState(null);
  const [msg, setMsg] = useState('');
  const [attachment, setAttachment] = useState([]);
  const [cancelEditConform, setcancelEditConform] = useState(false);


  const arr = messageByIdData.filter(val => val.id === messageId)
  const savemessages = arr.length ? arr[0].saveThisMessage : false

  const highStyle = attachment.length === 1 ? { height: '78px' } : (attachment.length === 2) ? { height: '130px' } : (attachment.length === 3) ? { height: '170px' } : { height: '240px' };

  const userLeft = userById.length ? userById[0].participant[0].left : false;

  const handleClickOpenEditBox = (event): void => {
    setMessageId(Number(event.target.id))
    event.stopPropagation();
    setopenEditMessageBox(event.currentTarget);
  };

  const handleClickEmoji = (event): void => {
    event.stopPropagation();
    setopenEmojiBox(event.currentTarget);
  }
  const onEmojiClick = (event, emojiObject): void => {
    setMsg(msg + emojiObject.emoji);
    setopenEmojiBox(null);
  };

  const handleCloseDialogBox = (e): void => {
    e.stopPropagation();
    setopenEditMessageBox(null);
    setopenEmojiBox(null);
    setcancelEditConform(false)
  };

  const mainUser = {
    threadId: 0,
    title: "Randy Smith",
    isMeeting: false,
    isDeleted: false,
    participant: [
      {
        userId: "00010203-0405-0607-0809-0a0b0c0d0e0f",
        userName: "Randy Smith",
        accessFrom: "2021-09-08T13:53:12.596364",
        left: false,
        markAsUnread: false,
        isFav: false,
        isPinned: false,
        isHidden: false,
        options: {
          canDelete: false,
          canEdit: false
        }
      }
    ]
  }

  const openEditDialogBox = Boolean(openEditMessageBox);
  const idOpenEditBox = openEditDialogBox ? 'simple-popover' : null;

  const openEmojiDialogBox = Boolean(openEmojiBox);
  const idOpenEmoji2 = openEmojiDialogBox ? 'simple-popover' : null;

  const fileHandler = (e): void => {
    if (e.target.files) {
      const arr: value[] = Array.from(e.target.files);
      const files = arr.map((value, index) => {
        return {
          id: attachment.length + index + 1,
          fileName: value.name,
          fileSize: Number((value.size / 1024 / 1024).toFixed(2)),
          unit: 'MB',
          fileType: value.name.split('.')[1]
        }
      });
      setAttachment([...attachment, ...files])
    }
  }

  const saved = (e): void => {
    handleCloseDialogBox(e);
    dispatch(saveMessage({ id: messageId, userId: userById[0].threadId }));
    dispatch(messageApiById(userById[0].threadId));
  }


  const messageHandler = (e): void => {
    setMsg(e.target.value)
  }
  const edited = (e): void => {
    handleCloseDialogBox(e);
    if (messageByIdData.length) {
      const arr = messageByIdData.filter(val => val.id === messageId)
      setMsg(arr[0].content)
      const att = arr[0].attachment.map((value, index) => {
        return {
          ...value,
          id: index + 1
        }
      })
      setAttachment(att)
      dispatch(editTrue({ id: messageId, edit: true, value: msg }))
    }
  }

  const handleOpenEdit = (): void => {
    setcancelEditConform(true)
  }
  const handleCloseEdit = (): void => {
    dispatch(editTrue({ id: messageId, edit: false, value: msg }))
    setcancelEditConform(false)
  }
  const handleDoneEdit = (): void => {
    const data = {
      msg,
      attachment,
    }
    if (msg || attachment.length) {
      attachment.forEach(value => (delete value.id))
      dispatch(editFalse({ id: messageId, userId: userById[0].threadId, edit: false, value: data }));
      dispatch(messageApiById(userById[0].threadId));
    }
  }
  const handleSubmitMessage = (e): void => {
    e.preventDefault();
  }
  const deleted = (e): void => {
    const data = {
      id: userById[0].threadId,
      messageId,
    }
    dispatch(deleteMessage(data))
    dispatch(messageApiById(userById[0].threadId));
    handleCloseDialogBox(e);
  }
  const deleteFileHandler = (e): void => {
    const newAttachment = attachment.filter(attachment => attachment.id !== Number(e.target.id));
    setAttachment(newAttachment)
  }

  const emojiHandler = (e): void => {
    const data = {
      id: userById[0].threadId,
      messageId: Number(e.target.id),
      emoji: [{
        userId: mainUser.participant[0].userId,
        emojiCode: e.target.innerText
      }]
    }
    dispatch(emojiMessage(data))
    dispatch(messageApiById(userById[0].threadId))
  }

  const removeEmojiHandler = (e): void => {
    const data = {
      id: userById[0].threadId,
      messageId: Number(e.target.id),
      userId: mainUser.participant[0].userId
    }
    dispatch(deleteEmoji(data));
    dispatch(messageApiById(userById[0].threadId))
  }
  return (
    <>
      <Box p={3}>
        {messageByIdData && messageByIdData.map((value, index) => {
          if (value.event["eventType"] === 'left_message' || value.event["eventType"] === 'join_message' || value.event["eventType"] === 'change_group_name_message') {
            return (
              <Box
                key={index}
                display="flex"
                alignItems="flex-start"
                justifyContent="flex-start"
                py={1}
              >
                <Box
                  display="flex"
                  alignItems="flex-start"
                  flexDirection="column"
                  justifyContent="flex-start"
                  mr={2}
                >
                  {value.event["eventType"] === 'left_message'
                    ? <div className={classes.icon}><ExitToAppIcon fontSize="small" /><span>{value.content}</span></div>
                    : value.event["eventType"] === 'join_message'
                      ? <div className={classes.icon}><PeopleOutlineIcon fontSize="small" /><span>{value.content}</span></div>
                      : <div className={classes.icon}><EditOutlinedIcon fontSize="small" /><span>{value.content}</span></div>
                  }

                </Box>
              </Box>

            )
          }
          return (
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-end"
              py={1}
              key={index}

            >
              <Box
                display="flex"
                alignItems="flex-end"
                flexDirection="column"
                justifyContent="flex-end"
                mr={2}
                className={classes.box}
              >
                {((message.edit && value.id === message.id) || userLeft) ? null :
                  <div className={classes.reactions}>
                    {reactionsOptions.map((emoji, index) => (<span key={index} className={classes.reaction} id={value.id.toString()} onClick={emojiHandler}>{emoji}</span>))}
                    |<span className={classes.reaction} aria-describedby={idOpenEditBox} id={value.id.toString()} onClick={handleClickOpenEditBox}>•••</span>
                  </div>
                }
                {(message.edit && value.id === message.id) ?
                  <form onSubmit={handleSubmitMessage} className={classes.fromborder}>
                    <div className={classes.editBox}>
                      <TextField
                        hiddenLabel
                        fullWidth
                        onChange={messageHandler}
                        value={msg}
                        variant="standard"
                        style={{ margin: '2px 0px 2px 0px' }}
                        size="small"
                      />
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Input accept="*" id="messenger-upload-file" type="file" multiple onChange={fileHandler} />
                        <Tooltip arrow title="Attach">
                          <label htmlFor="messenger-upload-file" >
                            <span className={classes.editIcon}><AttachFileTwoToneIcon style={{ fontSize: 24, paddingTop: '5px' }} /></span>
                          </label>
                        </Tooltip>
                        <Tooltip arrow title="Emoji">
                          <span onClick={handleClickEmoji} className={classes.editIcon}>&#128512;</span>
                        </Tooltip>
                        <Tooltip arrow title="Cancel">
                          <span onClick={handleOpenEdit} className={classes.editIcon}>&#10006;</span>
                        </Tooltip>
                        <Tooltip arrow title="Done">
                          <span onClick={handleDoneEdit} className={classes.editIcon}>&#10004;</span>
                        </Tooltip>
                      </div>
                    </div>
                    {attachment.length ?
                      <Scrollbars autoHide className={classes.root1} style={highStyle}>
                        {attachment.length && attachment.map((value, index) => {
                          return (
                            <List key={index} className={classes.list} style={{ margin: '10px', borderRadius: '5px' }}>
                              <ListItem>
                                <ListItemAvatar>
                                  <FolderIcon color="disabled" />
                                </ListItemAvatar>
                                <ListItemText
                                  primary={value.fileName}
                                />
                                <button className={classes.button} onClick={deleteFileHandler} id={value.id}>
                                  &#10006;
                                </button>
                              </ListItem>
                            </List>
                          );
                        })}
                      </Scrollbars>
                      : null}
                  </form>
                  :
                  <div>
                    {value.content &&
                      <>
                        <div>
                          {value.emoji && value.emoji.map((emoji, index) => <span key={index} id={value.id.toString()} onClick={removeEmojiHandler} style={{ fontSize: '12px', cursor: 'pointer' }}>{emoji.emojiCode} </span>)}
                        </div>
                        <CardWrapperPrimary>
                          {value.isEdited
                            ? <div className={classes.edited}>
                              <span style={{ color: 'black', fontSize: '12px' }}>edited</span>
                              <span>{value.content}</span>
                            </div>
                            :
                            <>
                              <div>
                                <Markup content={value.content} />
                              </div>
                            </>
                          }
                        </CardWrapperPrimary>
                      </>}
                  </div>
                }
                {value.attachment.length ?
                  <>
                    {(message.edit && value.id === message.id) ? null :
                      <>
                        <div className={classes.files}>
                          {(value.isEdited && !value.content)
                            ?
                            <span style={{ color: 'black', fontSize: '12px', margin: '2px 0px 5px 5px' }}>edited</span>
                            : null}
                          <div>
                            {value.emoji && value.emoji.map((emoji, index) => <span key={index} style={{ fontSize: '12px', cursor: 'pointer' }}>{emoji.emojiCode} </span>)}
                          </div>
                          {value.attachment.map((attvalue, index) => (
                            <div key={index} className={classes.file}><DescriptionIcon color="primary" fontSize="small" /><span style={{ fontSize: '14px', marginLeft: '5px' }}>{attvalue.fileName}</span></div>
                          ))}
                        </div>
                      </>
                    }
                  </> : null}
                <div className={classes.time}><UpdateSharpIcon style={{ fontSize: 12 }} />{new Date(value.createdDate).toLocaleTimeString()}</div>
              </Box>
            </Box>
          );
        })}
        <Popover
          id={idOpenEditBox}
          open={openEditDialogBox}
          anchorEl={openEditMessageBox}
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
              <ListItem button onClick={saved}>
                {savemessages ?
                  <>
                    <ListItemIcon >
                      <BookmarkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Unsave message" />
                  </>
                  :
                  <>
                    <ListItemIcon >
                      <BookmarkBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Save message" />
                  </>
                }
              </ListItem>
              <Divider />
              <ListItem button onClick={edited}>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Edit" />
              </ListItem>
              <Divider />
              <ListItem button onClick={deleted}>
                <ListItemIcon>
                  <DeleteOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Delete" />
              </ListItem>
            </List>
          </div>
        </Popover>
        <Popover
          id={idOpenEmoji2}
          open={openEmojiDialogBox}
          anchorEl={openEmojiBox}
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
          <Picker onEmojiClick={onEmojiClick} />
        </Popover>
      </Box >
      <Dialog
        open={cancelEditConform}
      >
        <DialogTitle id="alert-dialog-title">{`Do you want to discard this draft?`}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialogBox} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseEdit} color="primary" autoFocus>
            Discard
          </Button>
        </DialogActions>
      </Dialog>

    </>
  );
}

export default ChatContent;
