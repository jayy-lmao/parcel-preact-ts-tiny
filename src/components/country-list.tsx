import { h } from "preact";
import { useQuery } from "graphql-hooks";

const COUNTRY_QUERY = `
query{
  continents{
    id
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
      {data.continents.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}

export default CountryList;
