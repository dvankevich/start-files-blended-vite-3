import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import { useParams, useLocation } from 'react-router-dom';
import { fetchCountry } from '../service/countryApi';

const Country = () => {
  const location = useLocation();
  const { countryId } = useParams();
  const backLinkHref = location.state ?? '/country';
  const getCountryData = async () => {
    try {
      const data = await fetchCountry(countryId);
      return data;
    } catch (error) {
      console.error('Error fetching country:', error);
      return null;
    }
  };
  const country = getCountryData();
  console.log('Country ID:', countryId);
  console.log('Back link href:', backLinkHref);
  console.log('Fetched country data:', country);
  return (
    <Section>
      <Container>
        <GoBackBtn to={backLinkHref}>&lt;-- Go Back</GoBackBtn>
        <Heading title="Country" bottom />
      </Container>
    </Section>
  );
};

export default Country;
