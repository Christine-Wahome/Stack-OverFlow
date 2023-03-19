CREATE PROCEDURE spResetForgotPassword
  @Email VARCHAR(300)
AS
BEGIN
  UPDATE Users
  SET isForgotPassword = 0
  WHERE Email = @Email
END
