import Image from 'next/image';
import Link from 'next/link';
import { AccordianContentContainer, AccordianText } from './Styles';

interface DatapointInterface {
  id: string;
  url: string;
  name: string;
}

interface Props {
  props: {
    title: string;
    datapoints: Array<DatapointInterface>;
  };
}

const AccordianContent: React.FC<Props> = ({ props }) => {
  return (
    <AccordianContentContainer>
      {props.datapoints.map((datapoint) => (
        <div key={datapoint.id}>
          <Link href={datapoint.url}>
            <a>
              <AccordianText>{datapoint.name}</AccordianText>
            </a>
          </Link>
        </div>
      ))}
    </AccordianContentContainer>
  );
};

export default AccordianContent;
