export const wssUrl = () => {
  const url = "wss://" + window.location.host + "/api/ws";
  return url;
};