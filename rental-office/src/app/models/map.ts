// export interface Map {
// }

import { Resource } from "./resource";

export interface Map {
  id: number;
  name: string;
  image: string; // URL of the image
  resources: Resource[];
}