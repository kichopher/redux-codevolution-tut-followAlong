import { BUY_CAKE } from "./cakeTypes";

// create action creator functions here
export const buyCake = (number = 1) => ({
  type: BUY_CAKE,
  payload: number,
});
