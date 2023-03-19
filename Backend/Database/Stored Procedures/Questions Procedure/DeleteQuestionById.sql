CREATE PROCEDURE spDeleteQuestion
    @QuestionId VARCHAR(100)
AS
BEGIN
    BEGIN TRANSACTION;

    -- Delete any comments and votes associated with the question's answers
    DELETE FROM VotesPosted
    WHERE answerId IN (
        SELECT answerId FROM Answers WHERE questionId = @QuestionId
    );

    DELETE FROM Comments
    WHERE answerId IN (
        SELECT answerId FROM Answers WHERE questionId = @QuestionId
    );

    -- Delete the question's answers
    DELETE FROM Answers
    WHERE questionId = @QuestionId;

    -- Delete the question's tags
    DELETE FROM TagsAdded
    WHERE questionId = @QuestionId;

    -- Delete the question itself
    DELETE FROM QuestionsAsked
    WHERE questionId = @QuestionId;

    COMMIT;
END
