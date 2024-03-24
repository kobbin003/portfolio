import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../../sanity/env";

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	// unless you have caching for your front end, `useCdn` should be `true` for most production environments
	useCdn: true,
});
