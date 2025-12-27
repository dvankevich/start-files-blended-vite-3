import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import SearchForm from '../components/SearchForm/SearchForm';

const SearchCountry = () => {
  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
        <SearchForm />
      </Container>
    </Section>
  );
};

export default SearchCountry;
