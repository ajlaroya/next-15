import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query || "";

  const posts = [];
  // 1:57:45

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br /> connect with Entrepeneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit ideas, vote on pitches, and get noticed in virtual
          competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">

        </ul>
      </section>
    </>
  );
}
