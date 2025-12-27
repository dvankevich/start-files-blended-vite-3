const CountryList = ({ countries }) => {
  console.log('Rendering CountryList with countries:', countries);
  return (
    <>
      <ul>
        {countries.map(
          country =>
            country.country !== 'Russia' && (
              <li key={country.id}>{country.country}</li>
            ),
        )}
      </ul>
    </>
  );
};
export default CountryList;
