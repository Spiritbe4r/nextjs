
type Result<T> = { success: true; data: T } | { success: false; error: ApiError };

function createSuccessResult<T>(data: T): Result<T> {
    return { success: true, data };
}

