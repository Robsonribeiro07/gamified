import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
const FormSchema = z.object({
  user: z.string(),
  password: z.string(),
})

export type formSchema = z.infer<typeof FormSchema>

export function useFormAuth() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm<formSchema>({
    resolver: zodResolver(FormSchema),
  })

  const inputs = [
    { title: 'Email ou CPF', name: 'user', icon: 'user' },
    { title: 'Senha', name: 'password', icon: 'lock' },
  ] as const

  return {
    handleSubmit,
    control,
    isSubmitting,
    errors,
    inputs,
  }
}
