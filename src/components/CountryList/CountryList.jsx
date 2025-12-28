import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import Heading from '../Heading/Heading';
import { Link, useLocation } from 'react-router-dom';

const CountryList = ({ countries }) => {
  console.log('Rendering CountryList with countries:', countries);
  const location = useLocation();

  return (
    <>
      <Grid>
        {countries.map(
          country =>
            country.country !== 'Russia' && (
              <GridItem key={country.id}>
                <Link to={`/country/${country.id}`} state={location}>
                  <img src={country.flag} alt={country.country} />
                  <Heading title={country.country} tag="h3" />
                </Link>
              </GridItem>
            ),
        )}
      </Grid>
    </>
  );
};
export default CountryList;
