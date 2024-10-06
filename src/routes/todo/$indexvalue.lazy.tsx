import { createLazyFileRoute } from '@tanstack/react-router'
import { NumberIndex } from '../../pages/NumberIndex/NumberIndex'

export const Route = createLazyFileRoute('/todo/$indexvalue')({
  component: () => <NumberIndex />,
  // validateSearch: (search: Record<string, unknown>): any => {
  //   return {indexvalue: Number(search.indexvalue) ?? 333}
  // }
})
