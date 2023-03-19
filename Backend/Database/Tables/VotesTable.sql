CREATE TABLE Votes (
    voteId VARCHAR(100),
    questionId VARCHAR(100),
    userId VARCHAR(100),
    FOREIGN KEY (questionId) REFERENCES Questions(questionId),
    FOREIGN KEY (userId) REFERENCES Users(userId),

)