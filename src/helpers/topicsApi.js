const url = "http://localhost:9001/api/topics";

const getTopicos = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getTopicos };
