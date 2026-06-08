import Link from "next/link";
import type { CategoryInfo } from "@/lib/types";

export default function CategoryBadge({ category }: { category: CategoryInfo }) {
  return (
    <Link
      href={`/categoria/${category.id}`}
      className="flex items-center gap-2 px-4 py-2.5 bg-bg-card border border-border rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <span className="text-2xl">{category.emoji}</span>
      <span className="font-medium text-sm text-text">{category.name}</span>
    </Link>
  );
}
