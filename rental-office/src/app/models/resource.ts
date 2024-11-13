export interface Resource {
  id: number;
  name: string;
  status: number; // 0 - reserved, 1 - free, ...maybe else we will have soon
  x: number;
  y: number;
  height: number;
  width: number;
}