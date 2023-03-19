CREATE PROCEDURE spUpdateForgotPassword
  @Email VARCHAR(300)
AS
BEGIN
  UPDATE Users
  SET isForgotPassword = 1
  WHERE Email = @Email
END
