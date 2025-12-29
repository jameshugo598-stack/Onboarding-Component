export type RoleType = 'Developer' | 'Designer' | 'Product Manager' | 'Founder' | '';
export type UsageType = 'Personal' | 'Team' | '';

export interface FormData {
  name: string;
  email: string;
  password: string;
  role: RoleType;
  usage: UsageType;
  authProvider: 'email' | 'google' | 'github';
}

export enum Step {
  ACCOUNT = 0,
  PROFILE = 1,
  REVIEW = 2,
  COMPLETED = 3
}