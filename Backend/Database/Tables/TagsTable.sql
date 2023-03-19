CREATE TABLE Tags (
     tagId VARCHAR(100),
tagName VARCHAR(200),

PRIMARY KEY (tagId),

)
ALTER TABLE Tags
ADD  questionId VARCHAR(100) REFERENCES Questions(questionId);



