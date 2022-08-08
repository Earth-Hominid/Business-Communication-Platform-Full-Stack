import { useState } from 'react';
import { API_URL } from '@/config/index';
import { FileInput, FormContainer, SubmitInput } from './Styles';

const ImageUpload = ({ articleId, imageUploaded, imageId, token }) => {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(`files`, image);
    formData.append('ref', 'articles');
    formData.append('refId', articleId);
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

export default ImageUpload;
