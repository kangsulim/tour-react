type user = {
  username: string; // id
  password: string;
  name: string;
  nickname?: string;
  email: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type { user };