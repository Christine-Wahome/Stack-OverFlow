CREATE OR ALTER PROCEDURE spPostAnswers( @AnswerId VARCHAR(100), @Text VARCHAR(300), @UserId VARCHAR(100), @VoteCount VARCHAR(100),@QuestionId VARCHAR(100),@IsPreferred VARCHAR(100),
                                       @IsPreferredEmail VARCHAR(100))
AS

BEGIN
INSERT INTO Answers
     (
    answerId ,
    text,
    userId ,
    voteCount,
    questionId,
    isPreferred,
    isPreferredEmail  
    )
VALUES
    ( @AnswerId ,
      @Text,
     @UserId ,
      @VoteCount,
      @QuestionId,
      @IsPreferred,
      @IsPreferredEmail )   
END 



