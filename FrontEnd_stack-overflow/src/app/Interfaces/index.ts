

// export interface Users {
//     displayName: string
//     email: string
//     password: string
// }
export interface User{
    displayName:string
    email:string
    password:string
}

export interface Login{
    email: string
    password: string
}

export interface Message{
    message:string
}

export interface LoginUser{
    
    email:string
    password:string

    

}
export interface RegisteredUser{
    
    userId:string
    displayName?: string
   
    email:string
    password:string
    pictureUrl?:string
    isSent:string
    isAdmin:string
    isForgotPassword:string
}

export interface LoginSuccess{
    message:string
    displayName:string
    isAdmin:string
    token:string
    
}

export interface UpdateUserPayload {
    displayName: string;
    isAdmin: string;
  }

export interface Comment {
    commentId: string
    content: string
    questionId?:string
    text?:string
    
  }

  export interface Question {
    
    questionId?:string
    title: string
    description: string
    tagId: string
    tagName:string
    createdAtTime: Date
    answerId?:string
    viewCount?:string
  }
  
  export interface QuestionData {
    totalCount: number;
    currentPage: number;
    pageSize: string;
    totalPages: number;
    data: Question[];
  }
  
  export interface Answer {
    answerId?: string
    questionId:string
    text: string
    voteId?:string
    voteCount?: string
    isPreferred?:string
    voteType?:boolean
    content?:string
    commentId?:string
    displayName?:string
  }
  
  