export const PLANT_CONFIG = {
  API_KEY: process.env.EXPO_PUBLIC_PLANT_API_KEY,
  API_URL: `https://perenual.com/api/v2/species-list?key=${process.env.EXPO_PUBLIC_PLANT_API_KEY}`,
  headers: {
    "Content-Type": "application/json",
  },
};

export const getPlants = async () => {
  const response = await fetch(PLANT_CONFIG.API_URL, {
    headers: PLANT_CONFIG.headers,
    method: "GET",
  });
  if (!response.ok) {
    // @ts-ignore
    throw new Error("Failed to fetch plants", response.statusText);
  }
  const data = await response.json();
  return data;
};

export const getPlantById = async (id: string) => {
  const response = await fetch(
    `https://perenual.com/api/v2/species/details/${id}?key=${PLANT_CONFIG.API_KEY}`
  );
  if (!response.ok) {
    // @ts-ignore
    throw new Error("Failed to fetch plant details", response.statusText);
  }
  const data = await response.json();
  return data;
};
