import HeaderAuth from '@/components/auth/HeaderAuth'
import { FormSignUp } from '@/components/auth/SignUp/FormSignUp'

export default function SignUp() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="bg-supermarket bg-cover bg-center"></div>
      <div className="flex flex-col justify-center space-y-3 ">
        <HeaderAuth>Registra-se</HeaderAuth>
        <FormSignUp />
      </div>
    </div>
  )
}
