import type { FC } from "react";
import { useNavigate } from "react-router-dom";

type ErrorFallbackProps = {
	error: Error;
	resetErrorBoundary: () => void;
};

/**
 * @package
 */
export const LayoutFallback: FC<ErrorFallbackProps> = ({ error }) => {
	const navigate = useNavigate();

	const onGoBack = () => {
		navigate(-1);
	};

	return (
		<div role="alert">
			<p>An error has ocurred:</p>
			<p>{error.message}</p>
			<button onClick={onGoBack}>Go back</button>
		</div>
	);
};
