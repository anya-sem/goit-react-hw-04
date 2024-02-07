import { LineWave } from "react-loader-spinner";

export const Loader = () => {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div style={style}>
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#dbaded"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
