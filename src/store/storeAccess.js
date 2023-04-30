import { useSelector } from "react-redux";

export const useAppSelector = () => {
	const {
		user: { token: signupToken, userId, isError: isErrorSignup },
		login: { token: loginToken, isError: isErrorLogin },
		connections: { connections },
		chat: { chat, updateMessage },
		alert,
		messages: { reciever },
	} = useSelector((state) => state);
	return {
		isErrorSignup,
		userId,
		signupToken,
		alert,
		updateMessage,
		chat,
		loginToken,
		isErrorLogin,
		connections,
		reciever,
	};
};
