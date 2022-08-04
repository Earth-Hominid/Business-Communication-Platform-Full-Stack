import { HeaderContainer, MainSection, Title } from './Styles';
import Report from '../report/Report';

const Welcome = ({ user, reports }) => {
  const deleteReport = (id: string) => console.log(id);

  return (
    <MainSection>
      <HeaderContainer>
        <Title>Bem-vindo de volta {user && user.username}!</Title>
      </HeaderContainer>

      {reports.map((report) => (
        <Report key={report.id} report={report} handleDelete={deleteReport} />
      ))}
    </MainSection>
  );
};

export default Welcome;
