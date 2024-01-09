import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import styles from './SearchForm.module.css';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('searchQuery') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.searchQuery.value.trim() === '') {
      toast.error('You didnt enter anything. Try again!');
      return;
    }
    setSearchParams({ searchQuery: evt.target.elements.searchQuery.value });
    evt.currentTarget.reset();
  };

  return (
    <div className={styles.FormContainer}>
      <form className={styles.Form} autoComplete="off" onSubmit={handleSubmit}>
        <input
          className={styles.InputStyled}
          type="text"
          placeholder="Enter movie name..."
          name="searchQuery"
          defaultValue={search}
        />
        <button className={styles.ButtonStyled} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
