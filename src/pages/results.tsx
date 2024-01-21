import { useImages } from "@/api/get-images";
import { AppBar, ImageDetailsModal, ImageList, SearchBox } from "@/components";
import { useRandomImage } from "@/hooks";
import { useQueryParams, StringParam, NumberParam } from "use-query-params";
import { Hourglass } from "react-loader-spinner";

export function Results() {
  const [query, setQuery] = useQueryParams({ q: StringParam, id: NumberParam });
  const { randomImage } = useRandomImage();
  const { data: images, isLoading } = useImages(query.q);

  const style = {
    "--image-url": `url(${randomImage?.largeImageURL})`,
  } as React.CSSProperties;

  return (
    <div
      className="z-[-1] h-screen w-screen bg-[image:var(--image-url)] bg-cover bg-no-repeat px-8 py-10"
      style={style}
    >
      <header>
        <AppBar className="mb-20 flex flex-col items-center justify-between gap-2 md:flex-row md:gap-0" />
      </header>
      <SearchBox className="mb-10" placeholder="Start New Search" />
      <h2 className="mb-10 text-center text-3xl text-white md:text-5xl">
        Results: {query.q}
      </h2>
      <div className="relative right-8 flex w-screen gap-4 overflow-x-scroll bg-[#F5F5F5] p-6">
        {CATEGORIES.map((category) => (
          <div
            key={category}
            className="cursor-pointer rounded border border-[#767676] px-6 py-1 text-[#767676]"
            onClick={() => setQuery({ q: category })}
          >
            {category}
          </div>
        ))}
      </div>
      {isLoading ? (
        <Hourglass
          wrapperClass="mx-auto pt-6"
          visible={true}
          height="80"
          width="80"
        />
      ) : (
        <ImageList images={images} />
      )}

      {/* Don't Render the modal if ID not available in query params*/}
      {query.id && <ImageDetailsModal />}
    </div>
  );
}

const CATEGORIES = [
  "Digital",
  "Computer",
  "Coding",
  "Tech",
  "Netz",
  "Flowers",
  "Mountains",
  "Sky",
  "Pets",
  "Food",
  "Olympics",
  "Fashion",
  "Architecture",
  "Decoration",
  "Diwali",
  "Cricket",
];
