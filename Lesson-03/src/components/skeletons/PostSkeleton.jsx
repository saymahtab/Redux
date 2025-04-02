import { Skeleton } from "@/components/ui/skeleton";

export function PostSkeleton() {
  return (
    <article className="p-5 bg-gray-100 flex items-start rounded-md flex-col gap-2 w-full">
      {/* Title Skeleton (matches h3 size) */}
      <Skeleton className="h-7 w-3/4 bg-gray-300" />
  
      {/* Content Skeleton (matches paragraph) */}
      <Skeleton className="h-4 w-full bg-gray-300" />
      <Skeleton className="h-4 w-full bg-gray-300" />

      {/* Author/Date Skeleton Row */}
      <div className="flex gap-4">
          <Skeleton className="h-4 w-24 bg-gray-300" />
      </div>

      {/* Reaction Buttons Skeleton */}
      <div className="flex gap-2">
        <Skeleton className="h-8 w-8 bg-gray-300" />
        <Skeleton className="h-8 w-8 bg-gray-300" />
        <Skeleton className="h-8 w-8 bg-gray-300" />
        <Skeleton className="h-8 w-8 bg-gray-300" />
        <Skeleton className="h-8 w-8 bg-gray-300" />
      </div>
    </article>
  );
}
