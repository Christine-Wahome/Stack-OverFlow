CREATE OR ALTER PROCEDURE SpSendIsPreferredEmail
AS
BEGIN
    SELECT u.userId, u.displayName, u.email, a.answerId, a.isPreferredEmail
    FROM Users u
    JOIN Answers a ON u.userId = a.userId
    WHERE a.isPreferred = '1' AND a.isPreferredEmail = '0'
END;

