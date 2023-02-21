import { Product } from '@/types';
import Image from 'next/image';
import styles from './index.module.scss';

const ProductPreview = ({ item }: { item: Product }) => {
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <Image src={item.image} width={210} height={100} alt={item.title} unoptimized />
      </div>
      <p>{item.title}</p>
      <p>$ {item.price}</p>
    </div>
  );
};

export default ProductPreview;
