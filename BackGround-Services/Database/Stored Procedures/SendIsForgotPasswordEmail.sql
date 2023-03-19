CREATE PROCEDURE SpSendIsForgotPasswordEmail
  @Email VARCHAR(300)
AS
BEGIN
  SET NOCOUNT ON;

  SELECT *
  FROM Users
  WHERE isForgotPassword = '0' AND email = @Email
END;


EXECUTE SpSendWelcomeEmails