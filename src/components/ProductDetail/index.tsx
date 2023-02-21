import { Product } from '@/types';
import Image from 'next/image';
import styles from './index.module.scss';

const ProductDetail = ({ item }: { item: Product }) => {
  return (
    <div className={styles.item}>
      <div>
        <Image src={item?.image} width={400} height={100} alt={item?.title} unoptimized />
      </div>
      <div>
        <div>
          <p>
            <strong>{item?.title}</strong>
          </p>
          <p>$ {item?.price}</p>
          <p>({item?.rating.rate} / 5)</p>
        </div>
        <div>
          <p>{item?.description}</p>
        </div>
        <div className={styles.buttons}>
          <button>장바구니</button>
          <button>주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
