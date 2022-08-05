import React from 'react';
import { useState } from 'react';
import { API_URL } from '@/config/index';
import styles from '@/styles/Form.module.css';

export default function ImageUpload({ evtId, imageUploaded, imgId }) {
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    console.log('handleSubmit');
    e.preventDefault();

    const formData = new FormData(); // pure javascript nothing to do with react
    formData.append('files', image);
    // formData.append('ref', 'events') //'ref' The collection we want to use
    formData.append('ref', 'api::event.event');
    formData.append('refId', evtId); //'refId' The event Id
    formData.append('field', 'image'); //'field' the image field we called 'image'

    var uploadFormData = async () => {
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

    if (imgId === null) {
      console.log('imgId is null');
      uploadFormData();
    } else {
      console.log('imgId not null');

      const resDelete = await fetch(`${API_URL}/api/upload/files/${imgId}`, {
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

  const handleFileChange = (e) => {
    console.log('handleFileChange');
    console.log(e.target.files[0]); //this will give us an array and we want the first wone so we add 0
    setImage(e.target.files[0]);
  };
  return (
    <div className={styles.form}>
      <h1> Upload Event Image</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type="file" onChange={handleFileChange} />
        </div>
        <input type="submit" value="Upload" className="btn" />
      </form>
    </div>
  );
}
