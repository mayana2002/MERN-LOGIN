import { z } from 'zod';

export const createTaskSchema = z.object({
    title: z.string({
        required_error:'Title is a Requires',
    }), 
    description : z.string({
        required_error:'Description is a Requires',
    }),
    date : z.string().datetime().optional()    
});