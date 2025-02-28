import { config } from "@/shared/config";

type Method = "GET" | "OPTIONS" | "POST" | "PUT" | "PATCH" | "DELETE";

type ResponseType = "json" | "blob";

type ContentType = "multipart/form-data" | "application/json";

interface BaseRequestParams {
  path: string;
  method: Method;
  responseType?: ResponseType;
  contentType?: ContentType;
  body?: any;
}

export const baseRequest = async <T>({
  path,
  method,
  contentType,
  responseType = "json",
  body,
}: BaseRequestParams) => {
  const responseIsJson = responseType === "json";
  const url = buildUrl(path);
  const headers: Record<string, string> = {
    Authorization: "API-KEY",
    "X-API-KEY": "P-Co74TLgSaTKNXzWrjtbUIzemZBKC9yhu",
  };

  if (contentType) {
    headers["Content-Type"] = contentType;
  }
  const params: RequestInit = {
    headers,
    method,
  };

  if (body) {
    params.body =
      contentType === "multipart/form-data"
        ? (makeFormData(body) as FormData)
        : JSON.stringify(body);
  }

  const response = await fetch(url, params);
  if (response.ok) {
    const result = responseIsJson
      ? await response.json()
      : await response.blob();
    return { result: result as T, response };
  }

  throw { status: response.status, response };
};

const buildUrl = (path: string) => {
  return isRelativePath(path) ? config.api.BASE_URL + path : path;
};

const isRelativePath = (path: string) => {
  return path.startsWith("/");
};

const makeFormData = (data: object) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData;
};
