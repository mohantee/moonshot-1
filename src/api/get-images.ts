import { useQuery } from "react-query";
import { axios } from "@/lib/axios";
import { Images } from "@/types";

const apiSecretKey = import.meta.env.VITE_PIXABAY_SECRET_KEY;
type GetImagesQuery = string | undefined | null;

export const getImages = (query: GetImagesQuery = ""): Promise<Images> => {
  return axios.get(`?key=${apiSecretKey}&q=${query}`);
};

export function useImages(query: GetImagesQuery) {
  return useQuery({
    queryKey: ["images", query],
    queryFn: () => getImages(query),
  });
}
