CREATE PROCEDURE spDeleteUserById
    @UserId VARCHAR(100)
AS
BEGIN
    DELETE FROM Users
    WHERE userId = @UserId
END
