import { useSelector } from "react-redux";

export const useAppSelector = () => {
	const {
		user: { token: signupToken, isError: isErrorSignup },
		login: { token: loginToken, isError: isErrorLogin },
		alert,
	} = useSelector((state) => state);
	return { isErrorSignup, signupToken, alert, loginToken, isErrorLogin };
};
