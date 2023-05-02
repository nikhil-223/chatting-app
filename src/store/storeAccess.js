import { useSelector } from "react-redux";

export const useAppSelector = () => {
	const {
		user: { token: signupToken, userId,userName, isError: isErrorSignup },
		login: { token: loginToken, isError: isErrorLogin },
		connections: { connections },
		conversations: { conversations },
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
		conversations,
		userName,
		chat,
		loginToken,
		isErrorLogin,
		connections,
		reciever,
	};
};
