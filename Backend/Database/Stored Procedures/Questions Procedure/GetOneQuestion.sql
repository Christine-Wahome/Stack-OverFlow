CREATE OR ALTER PROCEDURE SpGetSpecificQuestion @QuestionId VARCHAR(300)
AS
BEGIN
 SELECT * FROM QuestionsAsked WHERE @QuestionId = @QuestionId
END;