import { ZodSchema, ZodFormattedError } from "zod";


const formatError = (rawFormatErr: ZodFormattedError<any>): Record<string, any> => {
    const err: Record<string, any> = {};

    const processErrors = (obj: any, prefix = '') => {
        for (const key in obj) {
            if (key === '_errors' && obj[key]?.length) {
                err[prefix] = obj[key][0];
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                processErrors(obj[key], prefix ? `${prefix}.${key}` : key);
            }
        }
    };

    processErrors(rawFormatErr);
    return err;
};

// Validation function
export const ZodValidate = <T>(schema: ZodSchema<T>, data: T): T => {
    const result = schema.safeParse(data);
    if (result.success) {
        return result.data as T;
    }

    const formattedError = formatError(result.error.format());
    throw formattedError;
};
