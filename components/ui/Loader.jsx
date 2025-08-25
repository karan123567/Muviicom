// app/components/ui/Loader.jsx
'use client';

const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="relative w-24 h-24 rounded-full border-4 animate-spin border-transparent border-t-gradient" />
      <style jsx>{`
        .border-t-gradient {
          border-top: 4px solid;
          border-image: linear-gradient(
            90deg,
            #00f0ff,
            #ff00e0,
            #00f0ff
          ) 1;
        }
      `}</style>
    </div>
  );
};

export default Loader;
