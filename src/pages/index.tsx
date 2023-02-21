import { Method, Product } from '@/types';
import fetcher from '@/utilities/fetcher';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { baseUrl } from './_app';
import styles from '../styles/main.module.scss';
import { useMemo } from 'react';
import ProductPreview from '@/components/ProductPreview';
import Link from 'next/link';

export default function Main() {
  const { data } = useQuery(['products'], () => {
    return fetcher(Method.GET, `${baseUrl}/products`);
  });
  // console.log(data);
  const products = useMemo(() => data, [data]);

  return (
    <main className={styles.main}>
      <section>
        <div>
          {products?.map((item: Product) => (
            <Link href={`../${item.category}/${item.id}`} key={item.id}>
              <ProductPreview item={item} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['products'], () => {
    return fetcher(Method.GET, `${baseUrl}/proudcts`);
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
