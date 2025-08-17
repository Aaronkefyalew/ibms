// app/page.tsx (or app/home/page.tsx if you want /home route)

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to Horizon
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-md">
        This is the home page of your financial dashboard. Use the sidebar to
        navigate between your banks, transactions, and transfers.
      </p>
    </main>
  );
};

export default Home;
