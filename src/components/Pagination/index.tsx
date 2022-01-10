import styles from './styles.module.scss';

type Pagination = {
  totalPosts: number;
  postsPerPage: number;
  paginate: (number: number) => void;
};

export const Pagination: React.FC<Pagination> = ({
  totalPosts,
  postsPerPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles['container']}>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a href="#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
