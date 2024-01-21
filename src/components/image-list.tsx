import { Images } from "@/types";
import { useQueryParam, NumberParam } from "use-query-params";

type Props = {
  images: Images | undefined;
};

export function ImageList({ images }: Props) {
  const [, setId] = useQueryParam("id", NumberParam);
  return (
    <>
      {images?.hits?.length ? (
        <div className="relative right-8 grid w-screen auto-rows-[minmax(50px,300px)] grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-3 bg-white p-3 md:gap-10 md:p-10">
          {images.hits.map((image) => (
            <div key={image.id} className="flex flex-col gap-2">
              <img
                src={image.webformatURL}
                alt=""
                className="aspect-video h-full w-full cursor-pointer rounded-lg object-cover"
                onClick={() => {
                  setId(image.id);
                }}
              />
              <div className="flex items-center gap-1">
                {image.tags.split(", ").map((tag) => (
                  <div
                    key={tag}
                    className="rounded-sm bg-[#F5F5F5] px-3 py-1 font-normal text-[#767676]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="4xl text-center">Loading...</h1>
      )}
    </>
  );
}
