CREATE OR ALTER PROCEDURE SpGetSpecificUser @UserId VARCHAR(100)
AS
BEGIN
 SELECT * FROM Users WHERE userId =@UserId
END;