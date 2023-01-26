import FormSearch from './atom/FormSearch';
import AtomInput from './AtomInput';
const Header = () => {
  return (
    <div className="bg-header-img bg-no-repeat bg-cover h-122">
      <div className="flex flex-col h-full items-center  justify-center">
        <i className="w-60 h-48 bg-header-frame-img bg-no-repeat "></i>
        <FormSearch />
        <div className="flex gap-5">
          <AtomInput placeholder="Marcas y tiendas" />
          <AtomInput placeholder="Artistas y conciertos" />
          <AtomInput placeholder="Torneos" />
        </div>
      </div>
    </div>
  );
};

export default Header;
