import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: {
    email: string;
    rol: string;
    usuario: string;
  };
}
