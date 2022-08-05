import { useState } from 'react';
import { Router, useRouter } from 'next/router';
import { API_URL } from '@/config/index';
import { FileInput, FormContainer, SubmitInput } from './Styles';

const ImageUpload = ({ reportId, imageUploaded, imageId }) => {
  const [image, setImage] = useState(null);
  const router = useRouter();

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    const formData = new FormData();
    formData.append(`files`, image);
    formData.append('ref', 'api::report.report');
    formData.append('refId', reportId);
    formData.append('field', 'image');
    formData.append('data', JSON.stringify(data));

    // console.log(formData);

    const uploadFormData = async () => {
      const res = await fetch(`${API_URL}/api/upload`, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        console.log('res.ok');
        console.log('res', res);
        imageUploaded();
      }
    };

    if (imageId === null) {
      console.log('imgId is null');
      uploadFormData();
    } else {
      console.log('imgId not null');

      const resDelete = await fetch(`${API_URL}/api/upload/files/${imageId}`, {
        method: 'DELETE',
        // body: formData,
      });

      if (resDelete.ok) {
        console.log('resDelete.ok');
        console.log('resDelete', resDelete);
        uploadFormData();
      }
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

export default ImageUpload;
