CREATE TABLE Answers (
    answerId VARCHAR(100),
    text VARCHAR(300),
    userId VARCHAR(100), 
    voteCount VARCHAR(100) DEFAULT '0',
    PRIMARY KEY (answerId),
    FOREIGN KEY (userId) REFERENCES Users(userId)
    
)
ALTER TABLE Answers
ADD  questionId VARCHAR(100) REFERENCES QuestionsAsked(questionId);

ALTER TABLE Answers
ADD isPreferred VARCHAR(100)

ALTER TABLE Answers
ADD isPreferredEmail VARCHAR(100)
