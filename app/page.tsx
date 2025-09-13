export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">
        Hello from the Terminal! 🚀
      </h1>
      <p className="text-xl text-gray-600">
        I edited this in nano!
      </p>
      <p className="text-sm mt-4">
        Updated from the terminal at {new Date().toLocaleTimeString()}
      </p>
    </main>
  )
}
