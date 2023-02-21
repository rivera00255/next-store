# Next & React Query

#### 설치, 환경설정 및 실행

.env

```
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
```

설치 및 실행

```
npm install
npm run dev
```

#### Next Data Fetching

- SSR
  - 서버에서 페이지를 렌더링해서 클라이언트에 전달
  - getServerSideProps 사용
- SSG
  - 빌드하는 시점에 페이지가 미리 생성
  - getStaticProps 사용
- ISR
  - 빌드하는 시점에 페이지 렌더링
  - 특정 시간마다 정적인 페이지 재생성

#### React Query로 SSR 구현

- Hydration 사용
- queryClient 생성 → prefetch → dehydrate → props로 전달
