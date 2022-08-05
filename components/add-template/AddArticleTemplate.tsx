import { parseCookies } from '@/helpers/index';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '@/config/index';

import type { NextApiRequest } from 'next';

import {
  FormPageTitle,
  FormContainer,
  StyledForm,
  InputLabelContainer,
  StyledInput,
  StyledLabel,
  FormButton,
  WideTextArea,
} from './Styles';

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  console.log(token);
  return {
    props: {
      token,
    },
  };
}

const AddArticleTemplate = ({ token }: { token: string }) => {
  const [dataForm, setDataForm] = useState({
    title: '',
    category: '',
    description: '',
    content: '',
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ token });
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
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error('Token not included', { icon: false });
        return;
      }
      toast.error('Could not create article.', { icon: false });
    } else {
      const article = await res.json();
      router.push(`/articles/${article.slug}`);
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
