import { useImages } from "@/api/get-images";

export function useRandomImage() {
  console.log("hiayay");
  const { data: images, isLoading, isError } = useImages("sky");

  const randomIndex = Math.floor(Math.random() * 20);
  if (images?.hits) {
    const randomImage = images.hits[randomIndex];
    return { randomImage, isLoading, isError };
  } else return { error: "No results found" };
}
