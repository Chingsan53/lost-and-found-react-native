import "dotenv/config";

export default {
  expo: {
    name: "lost-found-zone",
    slug: "lost-found-zone",
    extra: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
  },
};
