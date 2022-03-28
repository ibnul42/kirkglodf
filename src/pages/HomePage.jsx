import Authentication from "../components/Authentication";
import Header from "../components/Header";

function HomePage() {
  return (
    <div className="h-fit w-screen flex flex-col overflow-hidden">
      <div className="px-10 md:px-20 lg:px-32 flex flex-col z-10">
        <Header />
        <Authentication />
      </div>
    </div>
  );
}

export default HomePage;
