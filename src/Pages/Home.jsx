import { useEffect, useState } from 'react';
import { fetchTrends } from '../components/Services/ApiMovies';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { ColorRing } from 'react-loader-spinner';
import { Loader } from '../components/Loader/Loader';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrends();
        setMovies([...data.results]);
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading && (
        <Loader>
          <ColorRing
            visible={true}
            height="180"
            width="180"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </Loader>
      )}
      <h1 className={css.Title}>Tranding Today</h1>

      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
