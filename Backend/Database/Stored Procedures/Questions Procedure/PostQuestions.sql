CREATE OR ALTER PROCEDURE spPostQuestions( @QuestionId VARCHAR(100), @ViewCount VARCHAR(200), @Title VARCHAR(300), @Description VARCHAR(150), @UserId VARCHAR(100)
                          )
AS

BEGIN
INSERT INTO QuestionsAskedByUser
     (
    questionId ,
    viewCount,
    title ,
    description ,
    userId)
VALUES
    ( @QuestionId ,
      @ViewCount,
      @Title ,
      @Description,
      @UserId
      )   
END 



