export const useHttp = () => {
  const request = async (
    url,
    method = "GET",
    body = null,
    headers = { "Content-type": "application/json" }
  ) => {
    try {
      const res = await fetch(url, { method, body, headers });
      if (!res.ok) {
        throw new Error(`Couldn't fecth ${url}, status ${res.status}`);
      }
      const data = res.json();
      return await data;
    } catch (e) {
      console.log(e);
    }
  };
  return { request };
};
