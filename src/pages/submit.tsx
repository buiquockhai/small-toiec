import { CheckIcon } from "@icon/check";
import { XMarkIcon } from "@icon/x-mark";
import { STORAGE_KEY } from "@page/index";
import { useState } from "react";
import classnames from "classnames";

export const TOTAL = 100;

export default function SubmitPage() {
  const raw = localStorage.getItem(STORAGE_KEY) ?? "[]";
  const parse = JSON.parse(raw);
  const validate = Array.isArray(parse) ? parse : [];

  const results = Object.fromEntries(
    validate.map((item) => [item.id, item.value])
  );

  const [select, setSelect] = useState<any>({});

  const correct = Object.values(select).filter((item) => !!item);
  const countCorrect = correct.length || 0;

  return (
    <div className="mt-20 flex flex-col w-full gap-2">
      {Array.from({ length: TOTAL }).map((_, index) => (
        <div key={index} className="grid grid-cols-5 gap-2 group select-none">
          <div className="p-4 rounded bg-slate-100 grid place-content-center group-hover:bg-slate-200 transition">
            {index + 1}
          </div>
          <div className="col-span-2 p-4 rounded bg-slate-100 font-semibold text-xl grid place-content-center uppercase group-hover:bg-slate-200 transition">
            {results[index + 1]}
          </div>
          <div
            className={classnames(
              "p-4 rounded bg-slate-100 grid place-content-center group-hover:bg-slate-200 transition cursor-pointer",
              {
                "!bg-green-200": select[index + 1] === true,
              }
            )}
            onClick={() => setSelect({ ...select, [index + 1]: true })}
          >
            <CheckIcon />
          </div>
          <div
            className={classnames(
              "p-4 rounded bg-slate-100 grid place-content-center group-hover:bg-slate-200 transition cursor-pointer",
              {
                "!bg-red-200": select[index + 1] === false,
              }
            )}
            onClick={() => setSelect({ ...select, [index + 1]: false })}
          >
            <XMarkIcon />
          </div>
        </div>
      ))}

      <div className="mt-20 grid grid-cols-2 gap-4 text-xl font-semibold">
        <div className="p-4 rounded bg-green-500 text-white grid place-content-center">
          {countCorrect}
        </div>
        <div className="p-4 rounded bg-red-500 text-white grid place-content-center">
          {TOTAL - countCorrect}
        </div>
      </div>
    </div>
  );
}
