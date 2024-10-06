import { createLazyFileRoute } from '@tanstack/react-router'
import { NumberIndex } from '../../pages/NumberIndex/NumberIndex'

export const Route = createLazyFileRoute('/todo/')({
  component: () => <NumberIndex />,
  
})
