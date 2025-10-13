import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "eshlg51g",
    dataset: "production",
    apiVersion: "2025-02-09",
    useCdn: true,
});