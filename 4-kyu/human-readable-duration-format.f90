MODULE Solution
    IMPLICIT NONE
    PUBLIC:: formatDuration
    PRIVATE
    CONTAINS
        PURE FUNCTION formatDuration(seconds) RESULT(str)
            INTEGER, INTENT(IN):: seconds
            CHARACTER(len = 60):: str
            INTEGER:: years

            years = seconds / 31536000
            
        END FUNCTION formatDuration
END MODULE