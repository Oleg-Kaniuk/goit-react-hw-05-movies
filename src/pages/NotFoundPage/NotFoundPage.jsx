import { NotFoundContainer, NotFoundText, HomeLink} from "./NotFoundPage.styled"

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundText>
        Sorry, there is no such route :( Please follow this link to
        <HomeLink to="/"> home page</HomeLink>.
      </NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFoundPage;