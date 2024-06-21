const getAllTracers = async () => {
  const response = await fetch("http://localhost:3001/api/addTracer", {
    next: { tags: ["home"] },
  });
  const data = await response.json();
  return data;
};

export default getAllTracers;
