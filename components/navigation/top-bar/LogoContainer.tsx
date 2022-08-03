import Image from 'next/image';
import Link from 'next/link';

const Logo = require('../../public/logo.png');

import { ImageContainer } from './Styles';

const LogoContainer = () => {
  return (
    <>
      <Link href={'/'}>
        <a>
          <ImageContainer>
            <Image
              src={Logo}
              alt="logo"
              layout="fill"
              objectFit="contain"
              priority={true}
            />
          </ImageContainer>
        </a>
      </Link>
    </>
  );
};

export default LogoContainer;
