import AuthForm from '@/components/AuthForm'

const SignIn = () => {
  return (
    <section className="flex-center size-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back 👋
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Sign in to continue to your account
        </p>

        <AuthForm type="sign-in" />

        <p className="mt-6 text-sm text-center text-gray-500">
          Don’t have an account?{" "}
          <a href="/sign-up" className="text-indigo-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </section>
  )
}

export default SignIn
