export type SaveTracer = {
  title: string;
  priority: string;
  text: string;
  complete: boolean;
  dateCreated: string;
  dateUpdated: string;
  owner: string;
};

export interface GetTracer extends SaveTracer {
  _id: "string";
}

export type Sort = {
  high: GetTracer[];
  medium: GetTracer[];
  low: GetTracer[];
};

export interface Tracer {
  _id: string;
  tracer: TracerElement[];
  level: number;
}

export interface TracerElement {
  _id: string;
  text: string;
  priority: string;
  title: string;
  complete: boolean;
}
