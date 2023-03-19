CREATE PROCEDURE SpGetQuestionsCount
AS
BEGIN
  SELECT COUNT(*) AS questionCount FROM QuestionsAsked
END
