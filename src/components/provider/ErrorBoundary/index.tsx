import type { FC, ReactNode } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

import { LayoutFallback } from "~/components/provider/ErrorBoundary/Fallback";

type ErrorFallbackProps = {
	error: Error;
	resetErrorBoundary: () => void;
};

type ErrorBoundaryProps = {
	children: ReactNode;
	FallbackComponent?: FC<ErrorFallbackProps>;
};

export const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children, FallbackComponent }) => {
	return (
		<ReactErrorBoundary
			FallbackComponent={FallbackComponent || LayoutFallback}
		>
			{children}
		</ReactErrorBoundary>
	);
};
