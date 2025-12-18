import Image from "next/image";

const Loading = () => {
  return (
    <div className="h-screen bg-black relative z-100 flex items-center justify-center overflow-hidden">
      <Image
        className="loading-logo"
        src="/ms-bg-white.png"
        height={50}
        width={50}
        alt="Loading..."
      />
    </div>
  );
};

export default Loading;
