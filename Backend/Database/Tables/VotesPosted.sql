CREATE TABLE VotesPosted (
    voteId VARCHAR(100),
    answerId VARCHAR(100),
    
    FOREIGN KEY (answerId) REFERENCES Answers(answerId),
    

)