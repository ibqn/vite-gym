import Logo from '@/assets/logo.png'

type Props = {}

export const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="container mx-auto flex gap-16">
        <div className="basis-1/2">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <ul className="flex basis-1/4 flex-col gap-y-5">
          <li>
            <h4 className="font-bold">Links</h4>
          </li>
          <li>
            <p>Massa orci senectus</p>
          </li>
          <li>
            <p>Et gravida id et etiam</p>
          </li>
          <li>
            <p>Ullamcorper vivamus</p>
          </li>
        </ul>
        <ul className="flex basis-1/4 flex-col gap-y-5">
          <li>
            <h4 className="font-bold">Contact Us</h4>
          </li>
          <li>
            <p>Massa orci senectusTempus metus mattis risus volutpat egestas</p>
          </li>
          <li>
            <p>Tel.: (333)425-6825</p>
          </li>
        </ul>
      </div>
    </footer>
  )
}
