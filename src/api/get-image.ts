import { useQuery } from "react-query";
import { axios } from "@/lib/axios";
import { Images } from "@/types";

const apiSecretKey = import.meta.env.VITE_PIXABAY_SECRET_KEY;

type GetImageQuery = number | undefined | null;

export const getImage = (id: GetImageQuery = 0): Promise<Images> => {
  return axios.get(`?key=${apiSecretKey}&id=${id}`);
};

export function useImage(id: GetImageQuery) {
  return useQuery({ queryKey: ["images", id], queryFn: () => getImage(id) });
}
