const Main = ({ children }) => {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block">
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/18567381/pexels-photo-18567381.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Snowy hill with a small hut in the background"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-center p-6">{children}</div>
    </div>
  );
};

export default Main;

