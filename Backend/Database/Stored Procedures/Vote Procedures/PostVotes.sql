CREATE OR ALTER PROCEDURE spPostVotes( @VoteId VARCHAR(100), @AnswerId VARCHAR(100))
AS

BEGIN
INSERT INTO VotesPosted
     (
    voteId ,
    answerId
    
    )
VALUES
    ( @VoteId ,
      @AnswerId
      )   
END 



