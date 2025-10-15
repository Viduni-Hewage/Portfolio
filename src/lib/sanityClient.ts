import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "h44d3k75",
    dataset: "production",
    apiVersion: "2025-02-09",
    useCdn: true,
});