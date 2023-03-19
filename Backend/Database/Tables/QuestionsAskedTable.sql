CREATE  TABLE QuestionsAsked (
    questionId VARCHAR(100),
    viewCount VARCHAR(200),
    title VARCHAR(300) UNIQUE,
    description VARCHAR(150),
    userId VARCHAR(100),
    
    PRIMARY KEY (questionId),
    FOREIGN KEY (userId) REFERENCES Users(userId),
    
)

ALTER TABLE QuestionsAsked
ADD isPreferred VARCHAR(100);

ALTER TABLE QuestionsAsked
ADD isPreferredEmail VARCHAR(100) DEFAULT '0';


SELECT * FROM Users
SELECT * FROM QuestionsAsked