export const getHeadphones = async () => {
  const result = await fetch("http://localhost:3001/api/products", {
    next: {
      revalidate: 100,
      tags: ["getHeadphones"],
    },
  });

  return result.json();
};
