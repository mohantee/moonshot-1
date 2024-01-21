import { useImage } from "@/api/get-image";
import * as Dialog from "@radix-ui/react-dialog";
import { useQueryParams, StringParam, NumberParam } from "use-query-params";
import closeIcon from "@/assets/close.svg";

export function ImageDetailsModal() {
  const [query, setQuery] = useQueryParams({ q: StringParam, id: NumberParam });
  const { data: image, isError } = useImage(query.id);
  if (isError) {
    return <h1>"ERROR"</h1>;
  }
  const img = image?.hits?.[0];
  return (
    <Dialog.Root open={!!query.id}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 h-full w-full bg-black/20" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 w-[350px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white sm:w-[450px] md:w-[600px] lg:w-[1000px]"
          onPointerDownOutside={() => setQuery({ q: query.q, id: null })}
        >
          <div className="flex items-center justify-between rounded-lg bg-[#F5F5F5] px-5 py-3">
            <p>Preview ID: {image?.hits?.[0].id}</p>
            <button>
              <img
                src={closeIcon}
                alt=""
                onClick={() => setQuery({ q: query.q, id: null })}
              />
            </button>
          </div>
          <div className="flex flex-col justify-between gap-4 p-8 md:flex-row">
            <img
              src={img?.largeImageURL}
              alt=""
              className="aspect-video w-full rounded-lg bg-cover"
            />
            <div className="flex w-full flex-col md:w-[400px]">
              <h3 className="mb-4 text-lg font-medium">Download</h3>
              <button className="mb-6 rounded bg-[#4BC34B] px-3 py-1 text-white">
                Download for free!
              </button>
              <h3 className="mb-4 text-lg font-medium">Information</h3>
              <div className="grid grid-cols-3 grid-rows-4 gap-x-2">
                <p className="text-xs font-semibold text-[#717579]">User</p>
                <p className="text-right text-xs font-semibold text-[#717579]">
                  User ID
                </p>
                <p className="text-right text-xs font-semibold text-[#717579]">
                  Type
                </p>
                <p className="font-semibold">{img?.user}</p>
                <p className="text-right text-base font-semibold">
                  {img?.user_id}
                </p>
                <p className="text-right font-semibold">{img?.type}</p>
                <p className="mt-3 text-xs font-semibold text-[#717579]">
                  Views
                </p>
                <p className="mt-3 text-right text-xs font-semibold text-[#717579]">
                  Downloads
                </p>
                <p className="mt-3 text-right text-xs font-semibold text-[#717579]">
                  Likes
                </p>
                <p className="font-semibold">{img?.views}</p>
                <p className="text-right font-semibold">{img?.downloads}</p>
                <p className="text-right font-semibold">{img?.likes}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 px-8 pb-8">
            <span className="font-bold">Tags:</span>
            {img?.tags.split(", ").map((tag) => (
              <div
                key={tag}
                className="rounded-sm bg-[#F5F5F5] px-3 py-1 font-normal text-[#767676]"
              >
                {tag}
              </div>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
