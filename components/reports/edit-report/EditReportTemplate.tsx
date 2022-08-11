import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { API_URL } from '@/config/index';
import { PhotographIcon } from '@heroicons/react/outline';
import ReportImageUpload from '@/components/reports/report-image/ReportImageUpload';
import Modal from '@/components/modal/Modal';

interface ReportInterface {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  slug: string;
  image: object;
}

import {
  FormPageTitle,
  FormContainer,
  StyledForm,
  InputLabelContainer,
  StyledInput,
  StyledLabel,
  FormButton,
  WideTextArea,
  ImageContainer,
  ImageContainerHeading,
  ImageContainerText,
  IconContainer,
  ImageButton,
  ButtonHolder,
} from './Styles';

const EditReportTemplate = ({
  report,
  token,
}: {
  report: ReportInterface;
  token: string;
}) => {
  const [dataForm, setDataForm] = useState({
    title: report.title,
    category: report.category,
    description: report.description,
    content: report.content,
  });

  const [imageId, setImageId] = useState(
    report.image ? report.image.formats.thumbnail.url : null
  );

  const [imagePreview, setImagePreview] = useState(
    report.image ? report.image.formats.thumbnail.url : null
  );

  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation
    const hasEmptyFields = Object.values(dataForm).some(
      (element) => element === ''
    );

    if (hasEmptyFields) {
      toast.error('Please fill in all empty fields.', { icon: false });
    }

    const res = await fetch(`${API_URL}/reports/${report.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error('Unauthorized');
        return;
      }
      toast.error('Could not create report.', { icon: false });
    } else {
      const report = await res.json();
      router.push(`/reports/${report.slug}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const imageUploaded = async (e) => {
    const res = await fetch(`${API_URL}/reports/${report.id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setImagePreview(data.image.formats.thumbnail.url);
    setShowModal(false);
  };

  return (
    <>
      <FormPageTitle>Edite o relatório abaixo.</FormPageTitle>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <InputLabelContainer>
            <StyledInput
              type="text"
              id="title"
              name="title"
              value={dataForm.title}
              placeholder="Título"
              onChange={handleInputChange}
              required=""
              min="1"
              max="50"
            />
            <StyledLabel htmlFor="title">Título</StyledLabel>
          </InputLabelContainer>
          <InputLabelContainer>
            <StyledInput
              type="text"
              id="category"
              name="category"
              value={dataForm.category}
              placeholder="Categoria"
              onChange={handleInputChange}
              required=""
              min="1"
              max="50"
            />
            <StyledLabel htmlFor="category">Categoria</StyledLabel>
          </InputLabelContainer>
          <InputLabelContainer>
            <WideTextArea
              type="text"
              id="description"
              name="description"
              value={dataForm.description}
              placeholder="Descrição"
              onChange={handleInputChange}
              required=""
              rows="4"
            />
          </InputLabelContainer>
          <InputLabelContainer>
            <WideTextArea
              type="text"
              id="content"
              name="content"
              value={dataForm.content}
              placeholder="Conteúdo"
              onChange={handleInputChange}
              required=""
              rows="10"
            />
          </InputLabelContainer>
          <div className="mt-6 mb-12">
            <FormButton type="submit">Atualizar artigo</FormButton>
          </div>
        </StyledForm>
        <ImageContainer>
          <ImageContainerHeading>Imagem do artigo</ImageContainerHeading>
          {imagePreview ? (
            <div>
              <Image
                alt="Imagem do artigo"
                src={imagePreview}
                height={100}
                width={200}
              />
            </div>
          ) : (
            <div>
              <ImageContainerText>Nenhuma imagem enviada</ImageContainerText>
            </div>
          )}
          <ButtonHolder>
            <ImageButton onClick={() => setShowModal(true)}>
              <IconContainer>
                <PhotographIcon />
              </IconContainer>
              Definir imagem
            </ImageButton>
          </ButtonHolder>
        </ImageContainer>

        <Modal
          title={'Carregar uma imagem'}
          show={showModal}
          onClose={() => setShowModal(false)}
        >
          <ReportImageUpload
            reportId={report.id}
            imageUploaded={imageUploaded}
            imageId={imageId}
            token={token}
          />
        </Modal>
      </FormContainer>
    </>
  );
};

export default EditReportTemplate;
