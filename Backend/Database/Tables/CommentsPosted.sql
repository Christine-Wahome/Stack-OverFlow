CREATE TABLE CommentsPosted (
    commentId VARCHAR(100),
    text VARCHAR(200),
    answerId VARCHAR(100),
    FOREIGN KEY (answerId) REFERENCES Answers(answerId),
    
)

ALTER TABLE CommentsPosted
ADD content  VARCHAR(200)
 
ALTER TABLE CommentsPosted
DROP COLUMN text;

