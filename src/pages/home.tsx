import { AppBar, SearchBox } from "@/components";
import { Card } from "@/components/ui";
import { useRandomImage } from "@/hooks";

export function Home() {
  const { randomImage } = useRandomImage();
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
      <h2 className="mx-auto mb-20 max-w-[50rem] text-center text-4xl text-white md:text-7xl">
        Discover over 2,000,000 free Stock Images
      </h2>
      <SearchBox placeholder="Search" className="mb-4" />
      <Card className="mx-auto w-[300px] p-1 text-center">
        <p>Trending: flowers, love, forest, river</p>
      </Card>
    </div>
  );
}
