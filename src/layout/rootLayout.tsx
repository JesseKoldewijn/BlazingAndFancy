import { type ReactElement } from "react";

const RootLayout = ({ children }: { children: ReactElement }) => {
	return <main className="min-h-screen w-screen">{children}</main>;
};
export default RootLayout;
