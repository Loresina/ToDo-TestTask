// A mock function to mimic making an async request for data
export const fetchCount = async (amount = 1) => {
  return await new Promise<{ data: number }>((resolve) =>
    setTimeout(() => {
      resolve({ data: amount });
    }, 500),
  );
};
