CREATE TABLE TagsAdded (
     tagId VARCHAR(100),
tagName VARCHAR(200),
questionId VARCHAR(100),
FOREIGN KEY (questionId) REFERENCES QuestionsAsked(questionId),

PRIMARY KEY (tagId),

)




