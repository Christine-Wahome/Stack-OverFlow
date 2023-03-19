CREATE TABLE Questions (
    questionId VARCHAR(100),
    viewCount VARCHAR(200),
    title VARCHAR(300) UNIQUE,
    description VARCHAR(150),
    userId VARCHAR(100), 
    tagId VARCHAR(100),
    PRIMARY KEY (questionId),
    FOREIGN KEY (userId) REFERENCES Users(userId),
    FOREIGN KEY (tagId) REFERENCES Tags(tagId)
)
ALTER TABLE Questions
ADD  answerId VARCHAR(100) REFERENCES Answers(answerId);
