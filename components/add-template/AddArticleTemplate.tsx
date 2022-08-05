import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '@/config/index';
import {
  FormPageTitle,
  StyledForm,
  InputLabelContainer,
  FormContainer,
  StyledInput,
  StyledLabel,
  FormButton,
  WideTextArea,
} from './Styles';

const AddArticleTemplate = () => {
  const [dataForm, setDataForm] = useState({
    title: '',
    category: '',
    description: '',
    content: '',
  });

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

    const res = await fetch(`${API_URL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: dataForm }),
    });

    if (!res.ok) {
      toast.error('Could not create article.', { icon: false });
    } else {
      const report = await res.json();
      router.push(`/articles/`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  return (
    <>
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
      <FormPageTitle>Insira os detalhes do artigo abaixo.</FormPageTitle>
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
              rows="8"
            />
          </InputLabelContainer>
          <div className="mt-6 mb-12">
            <FormButton>Submit</FormButton>
          </div>
        </StyledForm>
      </FormContainer>
    </>
  );
};

export default AddArticleTemplate;
