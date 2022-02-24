const sideMenuState = {
	visible: false, // defaul kapalı
};

export const sideMenuReducer = (state = sideMenuState, action) => {
	if (action.type == 'toggleSideMenu') {
		return {
			...state,
			visible: action.payload.visible,
		};
	}

	return state;
};
