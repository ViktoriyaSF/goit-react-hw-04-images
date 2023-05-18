import ScrollToTop from 'react-scroll-to-top';
import { FiChevronsUp } from 'react-icons/fi';

export const BtnUp = () => {
  return (
    <>
      <ScrollToTop
        smooth
        style={{
          borderRadius: '50%',
          background: '#3f51b5',
          boxShadow:
            '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
          zIndex: 0,
        }}
        component={<FiChevronsUp size="1.5em" />}
      />
    </>
  );
};
