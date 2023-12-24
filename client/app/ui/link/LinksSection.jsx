import LinkContainer from './LinkContainer'
import LinkGenerator from './LinkGenerator'

const LinksSection = () => {
  return (
    <section className='h-dvh flex flex-col    items-center py-20 '>
      <LinkGenerator/>
      <LinkContainer/>
    </section>
  )
}

export default LinksSection
