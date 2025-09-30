import Axios from "axios";

import { environment } from "../../environment/";
import {
  ResponseInterceptor,
  ErrorInterceptor,
} from "./axios-config/interceptors";

const Api = Axios.create({
  baseURL: environment.baseUrl,
});

Api.interceptors.response.use(
  (response) => ResponseInterceptor(response),
  (error) => ErrorInterceptor(error)
);

export { Api };
