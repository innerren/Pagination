

export const getDate = async(url) =>
  fetch(`${url}`).then(response => response.json());
