import ProductDetail from '@/components/ProductDetail';
import { Method } from '@/types';
import fetcher from '@/utilities/fetcher';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { baseUrl } from '../_app';
import styles from './product.module.scss';

const Product = () => {
  const { query } = useRouter();

  const { data } = useQuery(['product'], () => {
    return fetcher(Method.GET, `${baseUrl}/products/${query.id}`);
  });

  const product = useMemo(() => data, [data]);

  return (
    <main className={styles.main}>
      <section>
        <ProductDetail item={product} />
      </section>
    </main>
  );
};

export default Product;
