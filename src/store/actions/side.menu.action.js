export const toggle = (visible) => {
	return {
		type: 'toggleSideMenu',
		payload: { visible: !visible }, // açıksa kapat kapalıysa aç dedik
	};
};
