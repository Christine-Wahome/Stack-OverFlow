CREATE TRIGGER set_created_at_timestamp
ON QuestionsAskedByUser
INSTEAD OF INSERT
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO QuestionsAskedByUser (questionId, viewCount, title, description, userId, createdAt)
    SELECT questionId, viewCount, title, description, userId, GETDATE()
    FROM inserted;
END
GO

CREATE TABLE QuestionsAskedByUser (
    questionId VARCHAR(100) PRIMARY KEY,
    viewCount VARCHAR(200),
    title VARCHAR(300),
    description VARCHAR(150),
    userId VARCHAR(100),
    createdAt DATETIME NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(userId)
);

DROP TABLE QuestionsAskedByUser