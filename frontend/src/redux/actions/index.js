export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmail = (gravatarEmail) => ({
  type: SAVE_EMAIL,
  gravatarEmail,
});
