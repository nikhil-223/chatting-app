import { useSelector } from "react-redux";

export const useAppSelector = () => {
	const {
		user: { token, userId,userName, isError: isErrorSignup },
		user,
		connections,
		conversations,
		chat,
		alert,
		messages: { reciever },
	} = useSelector((state) => state);
	return {
		isErrorSignup,
		userId,
		token,
		alert,
		conversations,
		userName,
		chat,
		connections,
		reciever,
		user
	};
};
