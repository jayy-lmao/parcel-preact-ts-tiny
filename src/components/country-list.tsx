import { h } from "preact";
import { useQuery } from "graphql-hooks";

const COUNTRY_QUERY = `
query{
  continents{
    code
    name
  }
}
`;

function CountryList() {
  const { loading, error, data } = useQuery(COUNTRY_QUERY);
  if (loading) return "Loading";
  if (error) return "Darn!";

  return (
    <ul>
      {data.continents.map(({ code, name }) => (
        <li key={code}>{name}</li>
      ))}
    </ul>
  );
}

export default CountryList;
