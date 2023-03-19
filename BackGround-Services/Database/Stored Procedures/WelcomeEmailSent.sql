CREATE PROCEDURE SpSendWelcomeEmails
AS
BEGIN
 SELECT * FROM Users WHERE isSent ='0'
END; 

EXECUTE SpSendWelcomeEmails