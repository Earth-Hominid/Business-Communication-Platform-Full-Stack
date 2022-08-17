import { useState } from 'react';
import { API_URL } from '@/config/index';
import { FileInput, FormContainer, SubmitInput } from './Styles';

// types
type image = File;

interface Props {
  token: string;
  reportId: string;
  imageUploaded: Function;
}

const ReportImageUpload: React.FC<Props> = ({
  reportId,
  imageUploaded,
  token,
}) => {
  const [image, setImage] = useState({} as image);

  const handleFileChange = (e: any) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(`files`, image);
    formData.append('ref', 'reports');
    formData.append('refId', reportId);
    formData.append('field', 'image');

    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      imageUploaded();
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <FileInput type="file" onChange={handleFileChange} />
        </div>
        <SubmitInput type="submit" value="Enviar" />
      </form>
    </FormContainer>
  );
};

export default ReportImageUpload;
