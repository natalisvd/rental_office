export interface StandardResponse<T = any> {
  isSuccess: boolean;
  data: T | null;
  errors: Array<{
    code: number;
    message: string;
  }>;
}