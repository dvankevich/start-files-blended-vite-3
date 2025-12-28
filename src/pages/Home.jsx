import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import Loader from '../components/Loader/Loader';
import { useState, useEffect } from 'react';
import { getCountries } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState('');
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await getCountries();
        setCountries(data);
        console.log('Fetched countries:', data);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setIsError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        <CountryList countries={countries} />
        {loading && <Loader />}
        {isError && <Heading title={`Error: ${isError}`} />}
      </Container>
    </Section>
  );
};
export default Home;
