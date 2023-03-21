CREATE TABLE VotesPosted (
    voteId VARCHAR(100),
    answerId VARCHAR(100)
    
    FOREIGN KEY (answerId) REFERENCES Answers(answerId),
    

)

ALTER TABLE VotesPosted
ADD voteType VARCHAR(100)