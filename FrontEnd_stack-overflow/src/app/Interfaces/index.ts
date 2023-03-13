

// export interface Users {
//     displayName: string
//     email: string
//     password: string
// }
export interface User{
    Name:string
    Email:string
    Password:string
}

export interface Login{
    email: string
    password: string
}

export interface Message{
    message:string
}

export interface LoginUser{
    
    Email:string
    password:string
    users:{token?: string;
         role?: string;
         name?: string; }
    

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
    id: string
    title: string
    description: string
    tag: string
    date: Date
    user: string
    comments: {[key: string]: Comment[]}
    answers: Answer[]
  }
  
  export interface Answer {
    id: string
    text: string
    date: Date
    user: string
    votes: number
  }
  
  