import Link from "next/link";

const ForgotPasswordForm = () => {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-gray-900">Reset password</h1>
      <p className="mt-1 text-sm text-gray-500">
        Enter your email and we&apos;ll send a reset link.
      </p>

      <form className="mt-6 space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            type="email"
            placeholder="you@example.com"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Send reset link
        </button>
      </form>

      <Link
        href="/login"
        className="mt-4 inline-block text-sm font-medium text-gray-900 underline-offset-4 hover:underline"
      >
        Back to login
      </Link>
    </div>
  );
};

export default ForgotPasswordForm;

