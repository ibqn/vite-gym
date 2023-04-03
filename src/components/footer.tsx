import Logo from '@/assets/logo.png'

type Props = {}

export const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="container mx-auto flex gap-16">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="basis-1/4 bg-yellow-200"></div>
        <div className="basis-1/4 bg-yellow-300"></div>
      </div>
    </footer>
  )
}
