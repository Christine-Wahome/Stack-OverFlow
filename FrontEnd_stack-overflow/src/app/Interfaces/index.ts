

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

export interface LoginSuccess{
    message:string
    token:string
    role:string
    name:string
}

export interface Comment {
    id: string
    text: string
    date: Date
    user: string
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
    id: string
    text: string
    date: Date
    user: string
    votes: number
  }
  
  