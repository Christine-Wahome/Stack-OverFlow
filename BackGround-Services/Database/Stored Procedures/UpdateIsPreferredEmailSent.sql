CREATE PROCEDURE SpUpdateIsPreferredEmail  @AnswerId VARCHAR(100)
AS
BEGIN
 UPDATE Answers SET isPreferredEmail ='1' WHERE answerId = @AnswerId
END; 

EXECUTE SpUpdateIsPreferredEmail @IdUser='24'