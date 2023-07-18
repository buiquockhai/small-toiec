import classnames from "classnames";

type Props = {
  title: string;
  message: string;
  onConfirm?: () => void;
  onClose: () => void;
  open: boolean;
};

export function Confirmation({
  title,
  open,
  message,
  onConfirm,
  onClose,
}: Props) {
  return (
    <div
      className={classnames(
        "fixed z-20 inset-0 w-full min-h-screen transition flex items-center justify-center",
        {
          "sr-only invisible opacity-0": !open,
        }
      )}
    >
      <div
        className="bg-black opacity-75 absolute inset-0 w-full min-h-full"
        aria-hidden
        onClick={onClose}
      />
      <div className="max-w-sm absolute w-full bg-white dark:bg-dark-bg dark:border border-solid dark:border-dark-border rounded p-4 flex flex-col">
        <p className="font-semibold">{title}</p>
        <p className="mt-3 text-slate-500 dark:text-dark-text">{message}</p>
        <div className="ml-auto flex items-center gap-2 mt-4">
          <button
            onClick={onClose}
            type="button"
            className="w-full rounded py-3 px-4 text-sm border-none outline-none font-semibold cursor-pointer transition bg-gray-200 hover:opacity-75 dark:bg-dark-bg-light dark:text-dark-text dark:border dark:border-solid dark:border-dark-border"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            type="button"
            className="w-full rounded py-3 px-4 text-sm border-none outline-none font-semibold cursor-pointer transition bg-blue-500 hover:opacity-75 text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
