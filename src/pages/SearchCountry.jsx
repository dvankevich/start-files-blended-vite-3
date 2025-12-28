import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import SearchForm from '../components/SearchForm/SearchForm';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchByRegion } from '../service/countryApi';

const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) {
      console.log('No region specified in searchParams.');
      return;
    }
    const getData = async () => {
      setLoading(true);
      try {
        const data = await fetchByRegion(region);
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
  }, [searchParams]);

  const onSubmit = region => {
    console.log('SearchCountry received region:', region);
    setSearchParams({ region });
    console.log('Updated searchParams:', Object.fromEntries([...searchParams]));
  };

  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
        <SearchForm onSubmit={onSubmit} />
        {countries.length > 0 && <CountryList countries={countries} />}
        {loading && <Loader />}
        {isError && <Heading title={`Error: ${isError}`} />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
