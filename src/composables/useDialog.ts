import { showDialog, DialogOptions, showConfirmDialog } from 'vant';
import 'vant/es/dialog/style';

export const useDialog = () => {
  const alert = async (message: string, options?: DialogOptions) => showDialog({
    confirmButtonText: '확인',
    message,
    ...options,
  });
  const confirm = async (message: string, options?: DialogOptions) => {
    try {
      const res = await showConfirmDialog({
        confirmButtonText: '확인',
        cancelButtonText: '취소',
        message,
        ...options,
      });
      return {
        isOk: res === 'confirm',
      };
    } catch {
      return {
        isCancelled: true,
      };
    }
  };
  return {
    alert,
    confirm,
  };
};
