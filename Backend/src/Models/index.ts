
export class UserRegistrationType{

    constructor (public userId:string ,public displayName:string ,public email:string ,public password:string,public pictureUrl:string,
        public isSent:string, public isAdmin:string, public isForgotPassword:string){}
}

export class QuestionPostType{

    constructor(
        public questionId: string ,
        public viewCount: string,
        public title: string ,
        public description: string ,
        public userId: string , 
        public tagId: string,
        public answerId: string,
        public tagName:string,
        public isPreferredEmail:string,
        public createdAtTime:string
    ){ }
}
export class AnswerPostType{

    constructor(
       public content:string,
       public userId:string ,
       public answerId:string,
       public commentId:string,
       public voteId:string ,
       public questionId:string,
       public text:string,
       public voteCount:string,
       public isPreferred:string,
       public isPreferredEmail:string,
       public voteType:boolean

    ){ }
}

export interface RequestType{
         userId:string,
         displayName:string,
         email:string,
         pictureUrl:string,
         isSent:string,
         isAdmin:string,
         isForgotPassword:string,
         iat:number,
         exp:number
}