import z from "zod";

const envSchema = z.object({
	WEB_URL: z.string().url(),
	PORT: z.coerce.number().default(3333),
	DATABASE_URL: z.string().url().startsWith("postgres://"),
});

export const env = envSchema.parse(process.env);
