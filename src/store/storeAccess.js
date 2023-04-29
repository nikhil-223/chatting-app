import { useSelector } from "react-redux";

export const useAppSelector = () => {
	const {
		user: { token: signupToken, userId , isError: isErrorSignup },
		login: { token: loginToken, isError: isErrorLogin },
		connections: { connections },
		chat:{chat},
		alert, 
		messages:{reciever}
	} = useSelector((state) => state);
	return {
		isErrorSignup,
		userId,
		signupToken,
		alert,
		chat,
		loginToken,
		isErrorLogin,
		connections,
		reciever,
	};
};
