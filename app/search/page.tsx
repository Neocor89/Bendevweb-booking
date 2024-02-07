// import { notFound } from "next/navigation";
// import fetchResults from "../../lib/fetchresults";

// type Props = {
//   searchParams: SearchParams;
// }

// type SearchParams = {
//   group_adults: string;
//   url: URL;
//   checkin: string;
//   checkout: string;
//   group_children: string;
//   no_rooms: string;
// }

// async function SearchPage({searchParams}: Props) {
//   if (!searchParams.url) return notFound();

  // const results = await fetchResults(searchParams);

  // if (!results) return <div>Not results found</div>;

//   return (
//     <div>SearchPage</div>
//   )
// }

// export default SearchPage