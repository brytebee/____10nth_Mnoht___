import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(3, { message: 'Name Username must be at least 3 characters' }).max(50, { message: 'Name cannot be more than 50 characters' }),
  email: z.string().min(1, { message: 'Email is required' }).email('Invalid email address'),
  message: z.string().min(3, { message: 'Message must be minimum 3 characters' })
})