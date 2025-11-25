export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 py-16 lg:p-24">
      <header className='flex flex-row justify-between items-center w-full max-w-4xl rounded-full border p-5'>
        <span className='text-2xl font-bold'>
          <a href="/">NEPP</a>
        </span>
        <nav className='flex flex-row justify-center items-center gap-4'>
          <a href="#">Login</a>
          <a href="#">Register</a>
        </nav>
      </header>
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-5xl font-bold mb-8">Welcome to Our Application</h1>
        <p className="text-lg mb-12 text-center max-w-2xl">
          This is a sample application built with Next.js and Tailwind CSS. Explore the features by logging in or registering for a new account.
        The backend is powered by ExpressJS and powered by PostgresSQL through Prisma ORM, providing a robust and scalable solution for data management.
        </p>
        <div className="flex flex-row gap-4">
          <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Login</a>
          <a href="#" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Register</a>
        </div>
      </div>
      <footer>
        <p className="text-sm text-gray-500">© 2024 Your Company. All rights reserved.</p>
      </footer>
    </main>
  )
}
