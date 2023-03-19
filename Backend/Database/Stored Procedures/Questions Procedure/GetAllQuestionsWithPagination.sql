CREATE OR ALTER PROCEDURE SpGetAllQuestionsWithPagination
    @skip VARCHAR(50),
    @pageSize VARCHAR(50)
AS
BEGIN
    DECLARE @intSkip INT, @intPageSize INT

    SET @intSkip = CAST(@skip AS INT)
    SET @intPageSize = CAST(@pageSize AS INT)

    SELECT *
    FROM QuestionsAsked
    ORDER BY questionId
    OFFSET @intSkip ROWS
    FETCH NEXT @intPageSize ROWS ONLY
END

