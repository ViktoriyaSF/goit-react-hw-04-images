import { ThreeDots } from 'react-loader-spinner';
import { StyledLoader } from './StyledLoader';

export const Loader = () => {
  return (
    <StyledLoader>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </StyledLoader>
  );
};
