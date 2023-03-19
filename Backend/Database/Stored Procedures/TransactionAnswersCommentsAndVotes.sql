CREATE OR ALTER PROCEDURE spPostAnswersAndCommentsWithVotes
(
    @AnswerId VARCHAR(100),
    @Text VARCHAR(300), 
    @UserId VARCHAR(100), 
    @VoteCount VARCHAR(100),
    @QuestionId VARCHAR(100),
    @CommentId VARCHAR(100), 
    @Content VARCHAR(200),
    @VoteId VARCHAR(100),
    @IsPreferred VARCHAR(100)
   
)
AS
BEGIN
    BEGIN TRANSACTION;

   

        EXEC spPostAnswers 
            @AnswerId ,
            @Text,
            @UserId ,
            @VoteCount,
            @QuestionId,
            @IsPreferred;
            
      
    EXEC spPostComments 
            @CommentId ,
            @Content,
            @AnswerId;

         EXEC spPostVotes
              @VoteId ,
              @AnswerId; 
                

    

        COMMIT 



  
END



EXEC spPostAnswersAndCommentsWithVotes  
    @AnswerId ='2345ssdfdsg',
    @Text ='vdfsfbvb',
    @UserId= '2f09b4c4-9581-4f38-8af7-b3ef70b09579',
    @VoteCount= '23',
    @QuestionId ='4b6e594b-e862-44b7-a6dd-911994c822e9',
    @CommentId ='0gsdafsd',
    @Content ='js',
    @VoteId='123'



SELECT * FROM Users
SELECT * FROM Answers
SELECT * FROM Comments
SELECT * FROM Votes
SELECT * FROM QuestionsAsked

 