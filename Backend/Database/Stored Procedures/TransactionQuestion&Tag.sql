CREATE OR ALTER PROCEDURE spPostQuestionsAndTag
(
    @QuestionId VARCHAR(100),
    @ViewCount VARCHAR(200),
    @Title VARCHAR(300),
    @Description VARCHAR(150),
    @UserId VARCHAR(100),
    @TagId VARCHAR(100),
    @AnswerId VARCHAR(100),
    @TagName VARCHAR(200)
   
   
)
AS
BEGIN
    BEGIN TRANSACTION;

   

        EXEC spPostQuestions 
            @QuestionId,
            @ViewCount,
            @Title,
            @Description,
            @UserId;
           
            
         EXEC spPostTag 
            @TagId,
            @TagName,
            @QuestionId;

    

        COMMIT 



  
END

SELECT * FROM QuestionsAsked

EXEC spPostQuestionsAndTag  @QuestionId ='b3333345fffdQDFDSD',
    @ViewCount ='34',
    @Title= 'Flex Box',
    @Description= 'How to center a div with flexbox',
    @UserId ='2f09b4c4-9581-4f38-8af7-b3ef70b09579',
    @TagId ='23dsfhgdW',
    @AnswerId ='22',
    @TagName ='js',
    @IsPreferred='0',
    @isPreferredEmail='0'



--   CREATE OR ALTER PROCEDURE spPostQuestionsAndTag
-- (
--     @QuestionId VARCHAR(100),
--     @ViewCount VARCHAR(200),
--     @Title VARCHAR(300),
--     @Description VARCHAR(150),
--     @UserId VARCHAR(100),
--     @TagId VARCHAR(100),
--     @AnswerId VARCHAR(100),
--     @TagName VARCHAR(200)
-- )
-- AS
-- BEGIN
--     BEGIN TRY
--         BEGIN TRANSACTION;

--         EXEC spPostQuestions 
--             @QuestionId,
--             @ViewCount,
--             @Title,
--             @Description,
--             @UserId;
            
--         EXEC spPostTag 
--             @TagId,
--             @TagName,
--             @QuestionId;

--         COMMIT;
--     END TRY
--     BEGIN CATCH
--         ROLLBACK;
--         THROW;
--     END CATCH;
-- END;


-- BEGIN CATCH
--     PRINT 'Error occurred: ' + ERROR_MESSAGE();
-- END CATCH;

