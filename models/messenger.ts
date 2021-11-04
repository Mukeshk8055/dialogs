export interface userData {
  threadId: number,
  title: string,
  isPinned: boolean,
  isHidden: boolean,
  isDeleted : boolean,
  mute : boolean,
  markAsUnread: boolean,
  lastMessageId: number,
  lastUpdated : string
  participant: [{
    userId: number,
    removed:boolean,
    left:boolean,
    lastReadMessage: number,
  }]
}

export interface userByIdData {
  threadId: number,
  title: string,
  isPinned: boolean,
  isHidden: boolean,
  isDeleted : boolean,
  mute : boolean,
  markAsUnread: boolean,
  lastMessageId: number,
  lastUpdated : string
  participant: [
    {
      userId: number,
      userName: string,
      accessFrom: string,
      lastReadMessage: number,
      removed:boolean,
      left:boolean,
      options: {
        canSave: boolean,
        canEdit: boolean
      }
    }
  ]
}
export interface messagesData {
  id: number,
  content: string,
  event: {
    type: string
  },
  attachment: [{
    fileName: string,
    fileSize: number,
    unit: string,
    fileType: string,
    time: string
  }],
  participant: [{
    lastReadMessage: number,
  }]
  createdDate: string,
  isEdited: boolean,
  emoji: [
    {
      userId: string,
      emojiCode: string
    }
  ]
  saveThisMessage : boolean,
}

export interface createdGroup {
  id: number,
  title: string,
  isMeeting: boolean,
  lastUpdated: string,
  lastMessageId: number,
  participant: [{
    userId: number,
    accessFrom: string,
    lastReadMessage: number,
    options: {
      canSave: boolean,
      canEdit: boolean
    }
  }]
}