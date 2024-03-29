import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from 'axios';


type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

interface HttpClientConfig extends AxiosRequestConfig {
    method: HttpMethod;
    requireToken: string;
}

export interface HttpClient {
    get<T>(url: string, config?: AxiosRequestConfig): Promise<Result<T>>;

    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>>;

    put<T>(url: string, data?: any, config?: HttpClientConfig): Promise<Result<T>>;

    patch<T>(url: string, data?: any, config?: HttpClientConfig): Promise<Result<T>>;

    delete<T>(url: string, config?: HttpClientConfig): Promise<Result<T>>;
}

const axiosClient = (baseURL: string): HttpClient => {
    const httpClient = axios.create({baseURL: baseURL});

    const httpMethods: Partial<HttpClient> = {};

    const methods: HttpMethod[] = ['get', 'post', 'put', 'patch', 'delete'];
    methods.forEach((method: HttpMethod) => {
        httpMethods[method] = async <T>(url: string, data?: any, config?: HttpClientConfig): Promise<Result<T>> => {
            try {
                let requestConfig: HttpClientConfig = config ?? {} as any;

                if (method === 'get' || method === 'delete') {
                    requestConfig = {...requestConfig, params: data};
                } else {
                    requestConfig = {...requestConfig, data};
                }

                const response: AxiosResponse<T> = await httpClient[method]<T>(url, requestConfig);
                return createSuccessResult(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    return createErrorResult(new ApiError(error.message, error.response?.status || 500));
                }
                return createErrorResult(new ApiError('Unknown error', 500));
            }
        };
    });

    return httpMethods as HttpClient;
};


function initializeInterceptors(httpClient: AxiosInstance): void {
    httpClient.interceptors.request.use(
        (config: any): InternalAxiosRequestConfig => {


            if (config.headers.requiresToken) {
                //const token = loadFromLocalStorage('token');
                config.headers = {
                    ...config.headers,
                    Authorization: `Bearer ${"token"}`,
                };
            }
            return config;
        },
        (error: AxiosError) => {
            // Handle request errors
            return Promise.reject(error);
        }
    );
}

export default axiosClient;
