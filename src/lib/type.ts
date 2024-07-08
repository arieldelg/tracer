export type SaveTracer = {
  title: string; //
  priority: string; //
  text: string; //
  complete: boolean; //
  dateCreated: string; //
  dateUpdated: string; //
  objectDay: {
    year: number;
    month: number;
    day: number;
  };
  tracerUserId: string; //
  level: number; //
};

export interface GetTracer extends SaveTracer {
  _id: string; //
}

export type Sort = {
  high: GetTracer[];
  medium: GetTracer[];
  low: GetTracer[];
};

// ! eliminar?
export interface TracerElement {
  title: string;
  priority: string;
  text: string;
  complete: boolean;
  dateCreated: string;
  dateUpdated: string;
  objectDay: {
    year: number;
    month: number;
    day: number;
  };
  tracerUserId: string;
  level: number;
}

export type Session = {
  user: {
    name: string;
    email: string;
    image: string;
    roles: string[];
    id: string;
  };
  expires: string;
};
