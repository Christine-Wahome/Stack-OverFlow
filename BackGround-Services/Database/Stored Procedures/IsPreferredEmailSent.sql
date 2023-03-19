CREATE PROCEDURE SpUpdateIsPrefferedAnsEmail @AnswerId VARCHAR(100) 
AS
BEGIN
 UPDATE Answers SET isPreferredEmail ='1' WHERE answerId = @AnswerId
END;  