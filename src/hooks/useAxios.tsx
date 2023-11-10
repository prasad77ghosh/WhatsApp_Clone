import { useState, useEffect } from "react";
import { API_CONFIG_TYPE } from "@/types/ApiType";
import { AxiosResponse, AxiosError } from "axios";

function useAxios<T>(config: API_CONFIG_TYPE) {
  const { axiosInstance, method, url, requestConfig } = config;
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reload, setReload] = useState<number>(0);

  const mutate = () => setReload((prev) => prev + 1);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res: AxiosResponse = await axiosInstance.request<AxiosResponse>({
          method: method,
          url: url,
          ...requestConfig,
          signal: controller.signal,
        });

        setResponse(res.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    // call the function
    fetchData();

    // useEffect cleanup function
    return () => controller.abort();
  }, [axiosInstance, method, reload, requestConfig, url]);

  return [response, error, loading, mutate];
}

export default useAxios;
