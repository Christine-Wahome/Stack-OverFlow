CREATE OR ALTER PROCEDURE spPostTag( @TagId VARCHAR(100), @TagName VARCHAR(200), @QuestionId VARCHAR(100))
AS

BEGIN
INSERT INTO TagsAdded
     (
    tagId ,
    tagName,
    questionId  
    )
VALUES
    ( @TagId ,
      @TagName,
      @QuestionId 
      )   
END 
