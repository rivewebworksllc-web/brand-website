"use client";

import { useState } from "react";
import type { EditorialResource, ResourceCategory } from "@/lib/content/resources";
import { ResourceCard } from "./ResourceCard";
import { ResourceCategoryNav } from "./ResourceCategoryNav";

export function ResourceGrid({ resources }: { resources: EditorialResource[] }) {
  const [active, setActive] = useState<ResourceCategory>("all");
  const visible = active === "all" ? resources : resources.filter((resource) => resource.category === active);

  return (
    <div>
      <ResourceCategoryNav active={active} onChange={setActive} />
      <p className="sr-only" aria-live="polite">Showing {visible.length} {visible.length === 1 ? "guide" : "guides"}</p>
      <div className="mt-8 grid grid-cols-1 gap-x-8 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}
      </div>
    </div>
  );
}
