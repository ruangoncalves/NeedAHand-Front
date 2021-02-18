import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5000/api",
  headers: { "content-type": "application/json" },
});

export default api;


// export const signUp = ({ name, email, password }) => {
//   return api
//     .post("/users", { name, email, password });
// };

// export const get = (url) => {
//   return api.get(url);
// }

// export const postAlarmPrice = ({productId, priceToMonitor}) => {
//   return api
//   .post('/users/alarmsprice', {productId, priceToMonitor});
// }