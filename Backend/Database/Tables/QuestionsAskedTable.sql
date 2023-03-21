CREATE  TABLE QuestionsAsked (
    questionId VARCHAR(100),
    viewCount VARCHAR(200),
    title VARCHAR(300) UNIQUE,
    description VARCHAR(150),
    userId VARCHAR(100),
    
    PRIMARY KEY (questionId),
    FOREIGN KEY (userId) REFERENCES Users(userId),
    
)

-- ALTER TABLE QuestionsAsked
-- ADD isPreferred VARCHAR(100);

-- ALTER TABLE QuestionsAsked
-- ADD isPreferredEmail VARCHAR(100) DEFAULT '0';

ALTER TABLE QuestionsAsked
DROP COLUMN createdAt;

-- SELECT * FROM Users
-- SELECT * FROM QuestionsAsked


CREATE TRIGGER set_created_at_time_timestamp
ON QuestionsAsked
INSTEAD OF INSERT
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO QuestionsAsked (questionId, viewCount, title, description, userId, createdAtTime)
    SELECT questionId, viewCount, title, description, userId, GETDATE()
    FROM inserted;
END
GO

ALTER TABLE QuestionsAsked
ADD createdAtTime DATETIME ;
