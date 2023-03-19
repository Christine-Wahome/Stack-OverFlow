CREATE OR ALTER PROCEDURE spPostComments( @CommentId VARCHAR(100), @Content VARCHAR(200), @UserId VARCHAR(100),@AnswerId VARCHAR(100))
AS

BEGIN
INSERT INTO Comments
     (
    commentId ,
    content,
    userId ,
    answerId
    )
VALUES
    ( @CommentId ,
      @Content,
     @UserId ,
     @AnswerId  )   
END 


