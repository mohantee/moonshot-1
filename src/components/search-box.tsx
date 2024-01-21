import { useState } from "react";
import { Card } from "./ui";
import searchIcon from "@/assets/search.svg";
import { useNavigate, createSearchParams } from "react-router-dom";
import { cn } from "@/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  placeholder: string;
}

export function SearchBox({ placeholder, className, ...props }: Props) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate({
      pathname: "/results",
      search: createSearchParams({ q: query }).toString(),
    });
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <Card
      className={cn(
        "mx-auto flex max-w-[54rem] gap-4 py-3 pr-5 md:w-full",
        className,
      )}
      {...props}
    >
      <img
        src={searchIcon}
        alt=""
        className="border-r-2 border-white py-2 pl-4 pr-3"
      />
      <form className="flex w-full" onSubmit={handleSubmit}>
        <input
          className="w-full bg-transparent text-white placeholder-white focus:outline-none"
          placeholder={placeholder}
          value={query}
          onChange={handleQueryChange}
        />
        <button type="submit" className="rounded-lg border-2 border-white px-3">
          GO!
        </button>
      </form>
    </Card>
  );
}
