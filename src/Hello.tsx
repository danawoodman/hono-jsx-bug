import type { FC } from 'hono/jsx';

export const Hello: FC<{ message: string }> = (props) => {
	return (
		<html>
			<body>Hello, {props.message}!</body>
		</html>
	);
};
