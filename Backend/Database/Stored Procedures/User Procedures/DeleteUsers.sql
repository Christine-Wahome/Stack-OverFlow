

CREATE OR ALTER PROCEDURE spDeleteUserById
    @UserId VARCHAR(100)
AS
BEGIN
    BEGIN TRANSACTION;    

    -- Delete votes and comments associated with answers posted by the user
    DELETE FROM VotesPosted
    WHERE answerId IN (
        SELECT answerId FROM Answers WHERE userId = @UserId
    );

    DELETE FROM CommentsPosted
    WHERE answerId IN (
        SELECT answerId FROM Answers WHERE userId = @UserId
    );

    -- Delete answers posted by the user
    DELETE FROM Answers
    WHERE userId = @UserId;

    -- Delete votes and comments associated with questions asked by the user
    DELETE FROM VotesPosted
    WHERE voteId IN (
        SELECT voteId FROM QuestionsAsked WHERE userId = @UserId
    );

    DELETE FROM CommentsPosted
    WHERE answerId IN (
        SELECT answerId FROM QuestionsAsked WHERE userId = @UserId
    );

    -- Delete tags associated with questions asked by the user
    DELETE FROM TagsAdded
    WHERE questionId IN (
        SELECT questionId FROM Answers WHERE userId = @UserId
    );

    -- Delete questions asked by the user
    DELETE FROM QuestionsAsked
    WHERE userId = @UserId;

    -- Delete the user
    DELETE FROM Users
    WHERE userId = @UserId;

    COMMIT;
END

EXEC spDeleteUserById @UserId= '1cdb8a0c-9c14-4743-b127-11fec0c5cbe4'

SELECT * FROM VotesPosted
SELECT * FROM CommentsPosted
SELECT * FROM Answers
SELECT * FROM TagsAdded
SELECT * FROM QuestionsAsked
SELECT * FROM Users