CREATE OR ALTER PROCEDURE spPostVotes( @VoteId VARCHAR(100), @AnswerId VARCHAR(100),@VoteType VARCHAR(100))
AS

BEGIN
INSERT INTO VotesPosted
     (
    voteId ,
    answerId,
    voteType
    
    )
VALUES
    ( @VoteId ,
      @AnswerId,
      @VoteType
      )   
END 



