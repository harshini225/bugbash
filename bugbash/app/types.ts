export type BugCreate = {
  date: Date; 
  description: string; 
  status: string;
  rate: number;
};

export type BugData = BugCreate & {
  id: number;
};

export type MyFormDataKeys = keyof BugCreate