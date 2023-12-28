import { ProgressBar } from 'react-loader-spinner';

 const Loader = ({ isLoading }) => {
  return (
    <ProgressBar
        visible={isLoading}
        height="80"
        width="80"
        color="rgb(81, 29, 131)"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
  );
};

export default Loader;
