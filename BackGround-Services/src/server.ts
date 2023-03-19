import express from 'express'
import cron from 'node-cron'
import sendAnsIsPreferredEmail from './emailService/answerPreferredEmail';
import sendIsForgotPasswordEmail from './emailService/isForgotPassword';
import sendWelcomeEmail from './emailService/welcomeEmail';


const app= express()

//sheduler to check for any new resgistered users
cron.schedule('*/5 * * * * *', async() => {
  console.log('Checking for a new registration after every 15 Seconds');
  await sendWelcomeEmail()
});

cron.schedule('*/5 * * * * *', async() => {
  console.log('Checking for isForgotPassword  email');
  await sendIsForgotPasswordEmail()
});

cron.schedule('*/5 * * * * *', async() => {
  console.log('Checking for Answer Preferred  email');
  await sendAnsIsPreferredEmail()
});


app.listen(4002, ()=>{
    console.log('App is Running');
    
})