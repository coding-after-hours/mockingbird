import { Link } from "~/components/lib/router/Link";
import { Outlet } from "~/components/lib/router/Outlet";
import { Suspense } from "~/components/provider/Suspense";
import { successButton } from "~/constants/buttonColor";

export const PublicLayout = () => {
	return (
		<main className="p-4 h-full min-h-screen bg-slate-900">
			<div className="flex flex-wrap gap-4 pb-4">
				<Link
					to="/"
					className={successButton}
				>
					to /
				</Link>
				<Link
					to="/sign-up"
					className={successButton}
				>
					to /sign-up
				</Link>
			</div>

			<Suspense>
				<Outlet />
			</Suspense>
		</main>
	);
};
