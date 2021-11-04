import { createSlice } from "@reduxjs/toolkit";
import { userData, messagesData, userByIdData, createdGroup } from 'src/models/messenger'
import axios from "axios";
interface Messenger {
  userData: userData[],
  messageByIdData: messagesData[],
  userById: userByIdData[],
  createdGroup: createdGroup[],
  message: { id: number, edit: boolean, value: string },
}

const initialState: Messenger = {
  userData: [],
  messageByIdData: [],
  userById: [],
  createdGroup: [],
  message: {
    id: null,
    edit: false,
    value: null
  }
};
const slice = createSlice({
  name: "messenger",
  initialState,
  reducers: {
    userData(state, action) {
      state.userData = action.payload;
    },
    messageByIdData(state, action) {
      state.messageByIdData = action.payload;
    },
    userById(state, action) {
      state.userById = action.payload;
    },
    createdGroup(state, action) {
      state.createdGroup = action.payload;
    },
    editMessage(state, action) {
      state.message = action.payload;
    }
  }
});

export const reducer = slice.reducer;

export const userApiFecth = () => async (dispatch) => {
  const response = await axios.get("https://api.einstonlabs.com/api/v1/messaging/threads/?mode=detailed&skip=0&limit=15");
  dispatch(slice.actions.userData(response.data.data));
};

export const userByIdFetch = (index) => async (dispatch) => {
  const response = await axios.get(`https://api.einstonlabs.com/api/v1/messaging/threads/${index}?mode=detailed`);
  dispatch(slice.actions.userById(response.data.data))
}

export const messageApiById = (index) => async (dispatch) => {
  const response = await axios.get(`https://api.einstonlabs.com/api/v1/messaging/threads/${index}/message?skip=0&limit=15`);
  dispatch(slice.actions.messageByIdData(response.data.data));
}

export const sendMessageById = (data) => async (dispatch) => {
  const message = {
    event: {
      eventType: "messeage",
      data: {
        userId: 3,
      }
    },
    content: data.msg,
    attachment: data.attachment,
    deleteAll: false,
    readBy: [],
    deliveredAck: [
      {
        userId: 3,
        time: "2021-09-06T10:36:02.056210+00:00"
      }
    ],
    deletedBy: [
      {
        userId: 3,
        time: "2021-09-06T10:36:02.056210+00:00"
      }
    ],
    isEdited: false,
    createdBy: "Randy Smith"
  }
  await axios.post(`https://api.einstonlabs.com/api/v1/messaging/threads/${data.id}/message`, message)
}

export const createGroup = (data) => async (dispatch) => {

  const title = data.title || data.participants.join(", ")
  const newgroup = {
    title,
    isMeeting: false,
    isDeleted: false,
    markAsUnread: false,
    isFav: false,
    isPinned: false,
    isHidden: false,
    participant: data.participantsInfo
  }
  await axios.post(`https://api.einstonlabs.com/api/v1/messaging/threads/`, newgroup)
}

export const createGroupMessage = (data) => async (dispatch) => {
  const userName = data.participants.join(', ')
  const message = {
    event: {
      eventType: "join_message",
      data: {
        userId: 3,
      }
    },
    content: `${data.user} added ${userName} to the chat.`,
    attachment: [],
    deleteAll: false,
    readBy: [],
    deliveredAck: [
      {
        userId: 3,
        time: "2021-09-06T10:36:02.056210+00:00"
      }
    ],
    deletedBy: [
      {
        userId: 3,
        time: "2021-09-06T10:36:02.056210+00:00"
      }
    ],
    isEdited: false,
    createdBy: "Randy Smith"
  }
  await axios.post(`https://api.einstonlabs.com/api/v1/messaging/threads/${data.id}/message`, message)
}
export const addNewPeopleGroup = (data) => async (dispatch) => {
  const newuser = {
    participant: data.participantsInfo.slice(1)
  }
  await axios.put(`https://api.einstonlabs.com/api/v1/messaging/threads/${data.id}`, newuser);

}

export const noAccessHistory = (data) =>  async (dispatch) => {
  data.participantsInfo.slice(1).forEach( async (getuserId) => { 
    await axios.put(`https://api.einstonlabs.com/api/v1/messaging/threads/accessFrom_no_history/${data.id}/${getuserId.userId}`)
  })
}

export const accessHistory = (data) =>  async (dispatch) => {
  data.participantsInfo.slice(1).forEach( async (getuserId) => { 
    await axios.put(`https://api.einstonlabs.com/api/v1/messaging/threads/accessFrom_with_history/${data.id}/${getuserId.userId}`)
  })
}

export const leaveGroup = (data) => async (dispatch) => {
  await axios.delete(`https://api.einstonlabs.com/api/v1/messaging/threads/left/${data.id}/${data.userId}`)
}

export const removeUser = (data) => async (dispatch) => {
  await axios.delete(`https://api.einstonlabs.com/api/v1/messaging/threads/${data.id}/${data.userId}`)
}

export const removeMessages = (data) => async (dispatch) => {
  const message = {
    event: {
      eventType: "left_message",
      data: {
        userId: 3,
      }
    },
    content: `${data.user} removed ${data.userName} from the chat.`,
    attachment: [],
    deleteAll: false,
    readBy: [],
    deliveredAck: [
      {
        userId: 3,
        time: "2021-09-06T10:36:02.056210+00:00"
      }
    ],
    deletedBy: [
      {
        userId: 3,
        time: "2021-09-06T10:36:02.056210+00:00"
      }
    ],
    isEdited: false,
    createdBy: "Randy Smith"
  }
  await axios.post(`https://api.einstonlabs.com/api/v1/messaging/threads/${data.id}/message`, message)
}

export const leftMessages = (data) => async (dispatch) => {
  const message = {
    event: {
      eventType: "left_message",
      data: {
        userId: 3,
      }
    },
    content: `${data.userName} left the chat.`,
    attachment: [],
    deleteAll: false,
    readBy: [],
    deliveredAck: [
      {
        userId: 3,
        time: "2021-09-06T10:36:02.056210+00:00"
      }
    ],
    deletedBy: [
      {
        userId: 3,
        time: "2021-09-06T10:36:02.056210+00:00"
      }
    ],
    isEdited: false,
    createdBy: "Randy Smith"
  }
  await axios.post(`https://api.einstonlabs.com/api/v1/messaging/threads/${data.id}/message`, message)
}

export const addMessages = (data) => async (dispatch) => {
  const userName = data.participants.join(', ')
  const message = {
    event: {
      eventType: "join_message",
      data: {
        userId: 3,
      }
    },
    content: data.historyMsg ? `${data.user} added ${userName} to the chat and shared all chat history.` : `${data.user} added ${userName} to the chat.`,
    attachment: [],
    deleteAll: false,
    readBy: [],
    deliveredAck: [
      {
        userId: 3,
        time: "2021-09-06T10:36:02.056210+00:00"
      }
    ],
    deletedBy: [
      {
        userId: 3,
        time: "2021-09-06T10:36:02.056210+00:00"
      }
    ],
    isEdited: false,
    createdBy: "Randy Smith"
  }
  await axios.post(`https://api.einstonlabs.com/api/v1/messaging/threads/${data.id}/message`, message)
}

export const emojiMessage = (data) => async (dispatch) => {

  const message = {
    emoji: data.emoji
  }
  await axios.post(`https://api.einstonlabs.com/api/v1/messaging/threads/${data.id}/message/${data.messageId}/${data.emoji[0].userId}`, message)
}

export const deleteEmoji = (data) => async (dispatch) => { 
  await  axios.put(`https://api.einstonlabs.com/api/v1/messaging/threads/${data.id}/message/${data.messageId}/${data.userId}`)
}
export const changeGroupName = (data) => async (dispatch) => {
  const message = {
    event: {
      eventType: "change_group_name_message",
      data: {
        userId: 3,
      }
    },
    content: `${data.user} changed the ${data.prevTitle} to ${data.title}.`,
    attachment: [],
    deleteAll: false,
    readBy: [],
    deliveredAck: [
      {
        userId: 3,
        time: "2021-09-06T10:36:02.056210+00:00"
      }
    ],
    deletedBy: [
      {
        userId: 3,
        time: "2021-09-06T10:36:02.056210+00:00"
      }
    ],
    isEdited: false,
    createdBy: "Randy Smith"
  }
  await axios.post(`https://api.einstonlabs.com/api/v1/messaging/threads/${data.id}/message`, message)
}
export const editTrue = (data) => async (dispatch) => {
  dispatch(slice.actions.editMessage(data));
}

export const editFalse = (data) => async (dispatch) => {
  const message = {
    content: data.value.msg,
    attachment: data.value.attachment
  }
  await axios.put(`https://api.einstonlabs.com/api/v1/messaging/threads/${data.userId}/message/${data.id}`, message)
  dispatch(slice.actions.editMessage(data));
}

export const changeGroup = (data) => async (dispatch) => {
  const title = {
    title: data.title
  }
  await axios.put(`https://api.einstonlabs.com/api/v1/messaging/threads/title/${data.id}`, title)
}

export const deleteMessage = (data) => async (dispatch) => {
  await axios.delete(`https://api.einstonlabs.com/api/v1/messaging/threads/${data.id}/message/${data.messageId}`)
}

export const deleteUser = (index) => async (dispatch) => {
  await axios.delete(`https://api.einstonlabs.com/api/v1/messaging/threads/${index}`)
}

export const pin = (index) => async (dispatch) => {
  await axios.put(`https://api.einstonlabs.com/api/v1/messaging/threads/Pinned/${index}`)
}

export const hidden = (index) => async (dispatch) => {
  await axios.put(`https://api.einstonlabs.com/api/v1/messaging/threads/Hidden/${index}`)
}

export const muted = (index) => async (dispatch) => {
  await axios.put(`https://api.einstonlabs.com/api/v1/messaging/threads/Mute/${index}`)
}

export const markAsUnreadApi = (index) => async (dispatch) => {
  await axios.put(`https://api.einstonlabs.com/api/v1/messaging/threads/MarkAsUnread/${index}`)
}

export const saveMessage = (data) => async (dispatch) => {
  await axios.put(`https://api.einstonlabs.com/api/v1/messaging/threads/save/${data.userId}/message/${data.id}`)
}

export const readByUser =  (data) => async (dispatch) => {
  await axios.post(`https://api.einstonlabs.com/api/v1/messaging/threads/${data.id}/message/${data.userId}`)
}

export const addUserToChatApi = (index) => async (dispatch) => { 
  await axios.put(`https://api.einstonlabs.com/api/v1/messaging/threads/add_user/${index}`)
}