class ApiError extends Error {
    constructor(public message: string, public code: number) {
        super(message);
        this.name = 'ApiError';
    }
}

function createErrorResult(error: ApiError): Result<never> {
    return { success: false, error };
}