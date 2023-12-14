import { showToast, ToastOptions } from 'vant';

export const useToast = () => ({
  show: (options?: ToastOptions | string) => showToast({
    wordBreak: 'break-all',
    closeOnClick: false,
    position: 'bottom',
    ...(typeof options === 'string' ? { message: options } : options),
  }),
});
