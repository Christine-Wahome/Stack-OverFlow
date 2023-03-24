CREATE OR ALTER PROCEDURE SpGetAnswersToQuestion @QuestionId VARCHAR(100)
AS
BEGIN
 SELECT * FROM Answers WHERE questionId= @QuestionId 
END;