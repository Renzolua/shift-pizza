import { createLazyFileRoute } from '@tanstack/react-router'
import { SignInForm } from '../../shared/ui/SingIn/SignInForm'

export const Route = createLazyFileRoute('/auth/')({
  component: () => <SignInForm />,
})
