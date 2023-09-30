import Skeleton from "react-loading-skeleton";

export default function SkeletonLoadingCards() {
  return (
    <section className="skeleton__container">
      <div className="skeleton-loading__title">
        <Skeleton count={1} height={40} />
      </div>

      <div className="gallery__cards">
        <Skeleton height={200} />
        <Skeleton height={200} />
        <Skeleton height={200} />
        <Skeleton height={200} />
        <Skeleton height={200} />
        <Skeleton height={200} />
      </div>
    </section>
  );
}
