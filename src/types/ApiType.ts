import { AxiosInstance } from "axios";

export type API_CONFIG_TYPE = {
  axiosInstance: AxiosInstance;
  method: string;
  url: string;
  requestConfig: any;
};

export interface API_RESULT<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
