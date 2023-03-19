CREATE OR ALTER PROCEDURE spPostQuestions( @QuestionId VARCHAR(100), @ViewCount VARCHAR(200), @Title VARCHAR(300), @Description VARCHAR(150), @UserId VARCHAR(100),
                          @isPreferredEmail VARCHAR(100))
AS

BEGIN
INSERT INTO QuestionsAsked
     (
    questionId ,
    viewCount,
    title ,
    description ,
    userId,
    isPreferredEmail
    )
VALUES
    ( @QuestionId ,
      @ViewCount,
      @Title ,
      @Description,
      @UserId,
      @isPreferredEmail)   
END 



