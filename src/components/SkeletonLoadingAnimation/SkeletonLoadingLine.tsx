import Skeleton from "react-loading-skeleton";

export default function SkeletonLoadingLine() {
  return (
    <div className="box__category--tools skeleton-loading__container--line">
      <Skeleton height={30} width={"80%"} />
      <ul>
        <Skeleton count={4} height={30} width={"85%"} />
      </ul>

      <Skeleton height={30} width={"80%"} />
      <ul>
        <Skeleton count={4} height={30} width={"85%"} />
      </ul>

      <Skeleton height={30} width={"80%"} />
      <ul>
        <Skeleton count={4} height={30} width={"85%"} />
      </ul>
    </div>
  );
}
