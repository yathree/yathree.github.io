export interface ApiResponse<T> {
  status: string;
  data: T;
  code?: number;
  error?: string;
}
