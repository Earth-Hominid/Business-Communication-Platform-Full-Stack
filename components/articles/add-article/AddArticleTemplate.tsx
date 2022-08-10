import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const AddArticleTemplate = ({ handleInputChange, handleSubmit, dataForm }) => {
  return (
    <>
      <FormPageTitle>Insira os detalhes do artigo abaixo.</FormPageTitle>
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
