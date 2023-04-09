import { Text } from '@chakra-ui/react'
import { Head } from 'components/layout/Head'
import { HeadingComponent } from 'components/layout/HeadingComponent'
import { LinkComponent } from 'components/layout/LinkComponent'

export default function Home() {
  return (
    <>
      <Head />

      <main>
        <HeadingComponent as="h2">Provided some tools.</HeadingComponent>
      </main>
    </>
  )
}
