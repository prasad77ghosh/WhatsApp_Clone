import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = "http://192.168.244.132:3300/api/v1/";

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface MutateOptions {
  headers?: Record<string, string>;
  // You can include other configuration options here as needed
}

export function useFetch<T>(url: string): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const reqUrl = BASE_URL + url;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(reqUrl);
        setData(response.data);
      } catch (error: any) {
        setError(error || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reqUrl]);

  return { data: data as T, loading, error };
}

export function useMutate<T>(url: string, method: "post" | "put" | "delete") {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refetchKey, setRefetchKey] = useState(0);

  const makeRequest = async (data?: any, options?: MutateOptions) => {
    setLoading(true);
    setError(null);

    try {
      let response: AxiosResponse<T>;

      const config: AxiosRequestConfig = {
        headers: options?.headers || {},
        // You can include other configuration options here as needed
      };

      switch (method) {
        case "post":
          response = await axios.post<T>(url, data, config);
          break;
        case "put":
          response = await axios.put<T>(url, data, config);
          break;
        case "delete":
          response = await axios.delete<T>(url, config);
          break;
        default:
          throw new Error("Invalid method");
      }

      // Trigger a refetch by updating the key
      setRefetchKey((prevKey) => prevKey + 1);

      return response.data;
    } catch (error: any) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { makeRequest, loading, error, refetchKey };
}
