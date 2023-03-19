CREATE TABLE Comments (
    commentId VARCHAR(100),
    text VARCHAR(200),
    answerId VARCHAR(100),
    userId VARCHAR(100),
    FOREIGN KEY (answerId) REFERENCES Answers(answerId),
    FOREIGN KEY (userId) REFERENCES Users(userId),

)