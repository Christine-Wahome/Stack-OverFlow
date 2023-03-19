CREATE PROCEDURE spRegisterUser( @UserId VARCHAR(100), @DisplayName VARCHAR(200), @Email VARCHAR(300), @Password VARCHAR(150), @PictureUrl VARCHAR(300),@IsSent VARCHAR(150))
AS

BEGIN
INSERT INTO users
     (
    userId ,
    displayName ,
    email ,
    password,
    pictureUrl,
    isSent)
VALUES
    ( @UserId ,
     @DisplayName,
     @Email ,
     @Password,
     @PictureUrl,
     @IsSent )   
END 
