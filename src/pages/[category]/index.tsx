import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import fetcher from '@/utilities/fetcher';
import { Method, Product } from '@/types';
import { baseUrl } from '../_app';
import styles from './index.module.scss';
import { useMemo } from 'react';
import ProductPreview from '@/components/ProductPreview';
import Link from 'next/link';

const Category = () => {
  const { query } = useRouter();
  //   console.log(query.category);

  const { data } = useQuery(['ProductsByCategory', query.category], () => {
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
            <Link href={`./${item.category}/${item.id}`} key={item.id}>
              <ProductPreview item={item} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Category;
