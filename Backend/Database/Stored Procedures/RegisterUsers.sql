CREATE OR ALTER PROCEDURE spRegisterUser( @UserId VARCHAR(100), @DisplayName VARCHAR(200), @Email VARCHAR(300), @Password VARCHAR(150), @PictureUrl VARCHAR(300),@IsSent VARCHAR(150),
                          @isAdmin VARCHAR(150))
AS

BEGIN
INSERT INTO Users
     (
    userId ,
    displayName ,
    email ,
    password,
    pictureUrl,
    isSent,
    isAdmin)
VALUES
    ( @UserId ,
     @DisplayName,
     @Email ,
     @Password,
     @PictureUrl,
     @IsSent,
     @isAdmin )   
END 



SELECT * FROM Users
 
