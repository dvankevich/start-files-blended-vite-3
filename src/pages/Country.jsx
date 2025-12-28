import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import { useParams, useLocation } from 'react-router-dom';
import { fetchCountry } from '../service/countryApi';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import CountryInfo from '../components/CountryInfo/CountryInfo';

const Country = () => {
  const location = useLocation();
  const { countryId } = useParams();
  const backLinkHref = location.state ?? '/country';
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState('');
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
        console.log('Fetched countries:', data);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setIsError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [countryId]);
  console.log('Country ID:', countryId);
  console.log('Back link href:', backLinkHref);
  console.log('Fetched country data:', country);
  return (
    <Section>
      <Container>
        <GoBackBtn to={backLinkHref}>&lt;-- Go Back</GoBackBtn>
        {country && <CountryInfo country={country} />}
        {loading && <Loader />}
        {isError && <Heading title={`Error: ${isError}`} />}
      </Container>
    </Section>
  );
};

export default Country;
