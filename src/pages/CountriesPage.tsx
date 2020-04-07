import { GraphQLClient, ClientContext } from "graphql-hooks";
import { h } from "preact";
import CountryList from "../components/country-list";

const client = new GraphQLClient({
  url: "https://countries.trevorblades.com/",
});

function CountriesPage() {
  return (
    <ClientContext.Provider value={client}>
      <CountryList />
    </ClientContext.Provider>
  );
}

export default CountriesPage;
