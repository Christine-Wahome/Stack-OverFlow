import Joi from 'joi'

export const registration = Joi.object({
    displayName:Joi.string().required().messages({
        'string.empty':' Please add a User Name'
    }),
    email:Joi.string().required().email().messages({
        'string.empty':' Please add an Email',
        'string.email':'Not a Valid Email'
    }),
    password:Joi.string().required().pattern(new
        RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')),
    pictureUrl:Joi.string(),
    isSent:Joi.string(),
    isAdmin:Joi.string()
})

export const loginSchema= Joi.object({
    email:Joi.string().required().email().messages({
        'string.empty':' Please add an Email',
        'string.email':'Not a Valid Email'
    }),
    password:Joi.string().required().pattern(new
        RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$'))
})

export const quesionsSchema = Joi.object({
    title:Joi.string().required().messages({
        'strin.empty':'Please add a title'
    }),
    description:Joi.string().required(),
    viewCount:Joi.string().required(),
    tagId:Joi.string().required(),
    answerId:Joi.string().required(),
    tagName: Joi.string().required()
})

export const answersSchema = Joi.object({
    content:Joi.string(),
    commentId:Joi.string(),
    voteId:Joi.string() ,
    questionId: Joi.string().required(),
    text:Joi.string().required(),
    voteCount:Joi.string(), 
    isPreferred:Joi.string(),
    isPreferredEmail:Joi.string(),
    voteType:Joi.string()
})