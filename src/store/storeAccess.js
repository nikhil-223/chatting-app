import { useSelector } from "react-redux";

export const useAppSelector = () => {
	const {
		user: { token, userId,userName, isError: isErrorSignup },
		connections: { connections },
		conversations: { conversations },
		chat: { chat, updateMessage },
		alert,
		messages: { reciever },
	} = useSelector((state) => state);
	return {
		isErrorSignup,
		userId,
		token,
		alert,
		updateMessage,
		conversations,
		userName,
		chat,
		connections,
		reciever,
	};
};
