CREATE OR ALTER PROCEDURE SpUpdateUserSentEmail  @UserId VARCHAR(100)
AS
BEGIN
 UPDATE Users SET isSent ='1' WHERE userId = @UserId
END; 

EXECUTE SpUpdateUserSentEmail @UserId='24'