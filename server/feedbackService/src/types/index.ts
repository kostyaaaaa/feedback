export interface ILoginParams {
  email: string;
  password: string;
}

export enum UserGenders {
  MALE = 'male',
  FEMALE = 'female',
}

export enum UserRoles {
  ADMIN = 'admin',
  USER = 'user',
  OWNER = 'owner',
}

export enum UserStatuses {
  ACTIVE = 'active',
  BANNED = 'banned',
}

export interface IRegisterParams {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: UserGenders;
  role: UserRoles;
  status: UserStatuses;
}
