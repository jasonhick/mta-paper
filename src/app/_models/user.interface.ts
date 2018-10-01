export interface User {
  creationDateTime?: string;
  fullname?: string;
  lastLoginDateTime?: string;
  password: string;
  racf?: string;
  roles?: string[];
  status?: string;
  username: string;
  token?: string;
}
