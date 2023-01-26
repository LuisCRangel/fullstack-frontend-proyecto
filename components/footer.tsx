import FormSearch from "./atom/FormSearch"

const Footer = () => {
  return (
    <div className="bg-footer-img bg-no-repeat bg-cover h-122">
      <div className="flex flex-col h-full items-center  justify-center">       
        <FormSearch />     
      </div>
    </div>
  );
};

export default Footer