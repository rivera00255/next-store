import { baseUrl } from '@/pages/_app';
import { Method } from '@/types';
import fetcher from '@/utilities/fetcher';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import styles from './header.module.scss';
import { Noto_Sans } from '@next/font/google';
import Link from 'next/link';

const notoSans = Noto_Sans({ subsets: ['latin'], weight: '400' });

const Header = () => {
  const { data: category } = useQuery(['categories'], () => fetcher(Method.GET, `${baseUrl}/products/categories`));
  //   console.log(category);

  return (
    <header className={`${styles.header} ${notoSans.className}`}>
      <nav>
        <h1>
          <Link href="/">Store</Link>
        </h1>
        <ul>
          {category?.map((item: string) => (
            <li key={item}>
              <Link href={`./${item}`}>{item.toLocaleUpperCase()}</Link>
            </li>
          ))}
        </ul>
        <button>장바구니</button>
      </nav>
    </header>
  );
};

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['categories'], () => fetcher(Method.GET, `${baseUrl}/products/categories`));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Header;
