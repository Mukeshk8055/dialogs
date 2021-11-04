import {
  Tooltip,
  IconButton,
  Box,
  useTheme,
  Button,
  TextField,
  Popover
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import AttachFileTwoToneIcon from '@material-ui/icons/AttachFileTwoTone';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import { useState } from 'react';
import Picker from 'emoji-picker-react';
import { RootState } from 'src/store';
import { useSelector, useDispatch } from 'react-redux';
import { messageApiById, readByUser, sendMessageById } from 'src/slices/messenger';
import { makeStyles } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars-2';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import FormatColorTextRoundedIcon from '@material-ui/icons/FormatColorTextRounded';
import ReactQuill from 'react-quill';
import "../../../node_modules/react-quill/dist/quill.snow.css"

const Input = experimentalStyled('input')({
  display: 'none',
});

const BoxWrapper = experimentalStyled(Box)(
  ({ theme }) => `
      background: ${theme.colors.alpha.white[100]};
`
);
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px',
    margin: '1%',
    maxWidth: '98%',
    maxHeight: '250px',
    borderRadius: '5px'
  },
  list: {
    display: 'flex',
    backgroundColor: "rgba(0,0,0,0.1)",
    maxHeight: '50px',
    width: '98%',
    borderRadius: '5px',
  },
  emoji: {
    position: 'absolute',
    top: "18%",
    left: "30%"
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
  bottom: {
    display: 'flex',
    flexDirection: 'column',
    padding: "10px 2px 0px 10px",
    width: "100%",
    borderRadius: "5px",
  }
}));

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ['blockquote', 'code-block'],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ['link', 'image', 'video', 'formula'],
    [{ align: [] }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
  ],
};

const formats = ["font", "size", "bold", "italic", "underline", "list", "bullet", "align",
  "color", "background", "image", "video", 'link', 'indent', 'script', 'blockquote', 'code-block', 'formula'];

interface value {
  name: string,
  size: number
}
function BottomBarContent() {

  const { t }: { t: any } = useTranslation();
  useTheme();

  const [msg, setMsg] = useState('');
  const [textEditorMsg, setTextEditorMsg] = useState('');
  const [isEditor, setIsEditor] = useState(false);
  const [attachment, setAttachment] = useState([]);
  const [file, setFile] = useState([]);
  const [openEmojiBox, setopenEmojiBox] = useState(null);
  const { userById } = useSelector((state: RootState) => state.messages);
  const id = userById.length ? userById[0].threadId : 1;
  const dispatch = useDispatch();
  const classes = useStyles();

  const userLeft = userById.length ? userById[0].participant[0].left : false;

  const highStyle = attachment.length === 1 ? { height: '60px' } : (attachment.length === 2) ? { height: '110px' } : (attachment.length === 3) ? { height: '165px' } : { height: '200px' };
  const openEmojiDialogBox = Boolean(openEmojiBox);
  const idForOpenEmoji = openEmojiDialogBox ? 'simple-popover' : null;

  const messageHandlerOnchange = (e): void => {
    setMsg(e.target.value);
  }

  const textEditorMessageHandler = (value): void => {
    setTextEditorMsg(value);
  }
  const handleDrawerToggle = (event): void => {
    event.stopPropagation();
    setopenEmojiBox(event.currentTarget);
  };

  const handleCloseEmojiBox = (): void => {
    setopenEmojiBox(null);
  }
  const msgSend = (): void => {
    if (msg.trim() || attachment.length || textEditorMsg) {
      attachment.forEach(value => (delete value.id))
      if (isEditor) {
        const data = {
          id,
          msg: textEditorMsg,
          attachment
        }
        dispatch(sendMessageById(data));
        dispatch(messageApiById(data.id));
        const data1 = {
          id: userById[0].threadId,
          userId: userById[0].participant[0].userId
        }
        dispatch(readByUser(data1))
        setMsg('');
        setTextEditorMsg('')
        setAttachment([]);
        setFile([]);
      }
      else {
        const data = {
          id,
          msg,
          attachment
        }
        dispatch(sendMessageById(data));
        dispatch(messageApiById(data.id));
        const data1 = {
          id: userById[0].threadId,
          userId: userById[0].participant[0].userId
        }
        dispatch(readByUser(data1))
        setMsg('');
        setTextEditorMsg('')
        setAttachment([]);
        setFile([]);
      }
    }
  }

  const onEmojiClick = (event, emojiObject): void => {
    setMsg(msg + emojiObject.emoji);
    setopenEmojiBox(null)
  };

  const fileHandler = (e): void => {
    if (e.target.files) {
      const arr: value[] = Array.from(e.target.files)
      const files = arr.map((value, index) => {
        return {
          id: attachment.length + index + 1,
          fileName: value.name,
          fileSize: Number((value.size / 1024 / 1024).toFixed(2)),
          unit: 'MB',
          fileType: value.name.split('.')[1],
        }

      });
      const imagePreview = arr.map((value) => ({ type: value.name.split('.')[1], url: URL.createObjectURL(value) }));
      setAttachment([...attachment, ...files]);
      setFile([...file, ...imagePreview]);
    }
  }

  const formHandler = (e): void => {
    e.preventDefault();
    msgSend();
  }

  const changeInputToEditor = (): void => {
    setIsEditor(!isEditor);
  }

  const deleteFileHandler = (e): void => {
    const newAttachment = attachment.filter(value => value.id !== Number(e.target.id));
    setAttachment(newAttachment)
  }

  const newLineHandler = (e): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      msgSend();
    }
  }

  return (
    <>
      <div className={classes.bottom}>
        <BoxWrapper sx={{ flex: 0, mr: 2 }}>
          {isEditor ?
            <ReactQuill
              placeholder={t('Write here your message...')}
              onChange={textEditorMessageHandler}
              value={textEditorMsg}
              theme="snow"
              modules={modules}
              formats={formats}
              style={{ maxHeight: '250px', height: '200px', paddingBottom: '40px' }} />

            :
            <form onSubmit={formHandler} >

              {userById.length && userLeft ? <TextField
                hiddenLabel
                fullWidth
                onChange={messageHandlerOnchange}
                value="You can't send messages because you are not a member of the chat."
                variant="standard"
                disabled={true}
              /> :
                <TextField
                  hiddenLabel
                  fullWidth
                  multiline
                  size="small"
                  maxRows={12}
                  onKeyPress={newLineHandler}
                  placeholder={t('Write here your message...')}
                  onChange={messageHandlerOnchange}
                  value={msg}
                  variant="outlined"
                />}
            </form>}
        </BoxWrapper>
        <Box>
          {attachment.length ?
            <Scrollbars autoHide className={classes.root} style={highStyle}>
              {attachment.length && attachment.map((value, index) => {
                return (
                  <List key={index} className={classes.list} style={{ margin: '5px 0px' }}>
                    <ListItem>
                      <ListItemAvatar>
                        <FolderIcon />
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
        </Box>
        <div>
          {userById.length ?
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <Tooltip arrow placement="top" title={t('Format')}>
                  <IconButton color="primary" component="span" onClick={changeInputToEditor} disabled={userLeft ? true : false}>
                    <FormatColorTextRoundedIcon fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Tooltip arrow placement="top" title={t('Choose an emoji')}>
                  <IconButton color="primary" style={{ fontSize: '16px' }} onClick={handleDrawerToggle} aria-describedby={idForOpenEmoji} disabled={userLeft ? true : false}>😀</IconButton >
                </Tooltip>
                <Input accept="*" id="messenger-upload-file" type="file" multiple onChange={fileHandler} disabled={userLeft ? true : false} />
                <Tooltip arrow placement="top" title={t('Attach a file')} >
                  <label htmlFor="messenger-upload-file" >
                    <IconButton color="primary" component="span" disabled={userLeft ? true : false}>
                      <AttachFileTwoToneIcon fontSize="small" />
                    </IconButton>
                  </label>
                </Tooltip>
              </div>
              <div>
                <Button startIcon={<SendTwoToneIcon fontSize="small" />} type="submit" onClick={msgSend} disabled={userLeft ? true : false}>
                  {t('Send')}
                </Button>
              </div>
            </div>
            :
            <>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <Tooltip arrow placement="top" title={t('Format')}>
                    <IconButton color="primary" component="span" onClick={changeInputToEditor}>
                      <FormatColorTextRoundedIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip arrow placement="top" title={t('Choose an emoji')}>
                    <IconButton color="primary" style={{ fontSize: '16px' }} onClick={handleDrawerToggle} aria-describedby={idForOpenEmoji}>😀</IconButton >
                  </Tooltip>
                  <Input accept="image/*" id="messenger-upload-file" type="file" multiple />
                  <Tooltip arrow placement="top" title={t('Attach a file')} >
                    <label htmlFor="messenger-upload-file" >
                      <IconButton color="primary" component="span">
                        <AttachFileTwoToneIcon fontSize="small" />
                      </IconButton>
                    </label>
                  </Tooltip>
                </div>
                <div>
                  <Button startIcon={<SendTwoToneIcon fontSize="small" />} type="submit">
                    {t('Send')}
                  </Button>
                </div>
              </div>
            </>
          }
        </div>
      </div>
      <Popover
        id={idForOpenEmoji}
        open={openEmojiDialogBox}
        anchorEl={openEmojiBox}
        onClose={handleCloseEmojiBox}
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
    </>
  );
}

export default BottomBarContent;
