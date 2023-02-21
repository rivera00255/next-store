import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import fetcher from '@/utilities/fetcher';
import { Method, Product } from '@/types';
import { baseUrl } from '../_app';
import styles from './index.module.scss';
import { useMemo } from 'react';
import Image from 'next/image';
import ProductPreview from '@/components/ProductPreview';

const Category = () => {
  const { query } = useRouter();
  //   console.log(query.category);

  const { data } = useQuery(['byCategory', query.category], () => {
    return fetcher(Method.GET, `${baseUrl}/products/category/${query.category}`);
  });
  // console.log(data);
  const products = useMemo(() => data, [data]);
  // console.log(products);

  return (
    <main className={styles.main}>
      <section>
        <h4>카테고리</h4>
        <h3>{query?.category?.toString().toUpperCase()}</h3>
        <div>
          {products?.map((item: Product) => (
            <ProductPreview key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Category;
