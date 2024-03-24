import { type SchemaTypeDefinition } from "sanity";
import { portfolio } from "./schema/portfolio";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [portfolio],
};
