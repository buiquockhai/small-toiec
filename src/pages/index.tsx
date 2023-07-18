import { Button } from "@component/button";
import { Confirmation } from "@component/confirm";
import { Loading } from "@component/loading";
import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";

export const STORAGE_KEY = "answers";

export default function IndexPage() {
  const [question, setQuestion] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleSelect = async (value: string) => {
    const currentState = localStorage.getItem(STORAGE_KEY) ?? "[]";
    const parseArray = JSON.parse(currentState);
    const validateArray = Array.isArray(parseArray) ? parseArray : [];
    const newState = [
      ...validateArray.filter((item) => item.id !== question),
      { id: question, value },
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setQuestion(question + 1);
    setIsLoading(false);
  };

  const handleClearStorage = async () => {
    setIsLoading(true);
    setOpenConfirm(false);
    localStorage.removeItem(STORAGE_KEY);
    await new Promise((r) => setTimeout(r, 500));
    setQuestion(1);
    setIsLoading(false);
  };

  useEffect(() => {
    const currentState = localStorage.getItem(STORAGE_KEY) ?? "[]";
    const parseArray = JSON.parse(currentState);
    setQuestion(parseArray.length + 1);
  }, []);

  return (
    <Fragment>
      <Loading loading={isLoading} />
      <Confirmation
        onClose={() => setOpenConfirm(false)}
        onConfirm={handleClearStorage}
        open={openConfirm}
        title="Clear storage"
        message="Are you sure clear storage data?"
      />

      <p className="font-semibold mt-20">Question {question}</p>

      <div className="mt-5 grid grid-cols-2 gap-4 w-full">
        {Array.from("ABCD").map((item) => (
          <div
            key={item}
            className="rounded bg-slate-100 border border-solid dark:border-dark-border dark:bg-dark-bg transition hover:opacity-60 grid place-content-center p-4 cursor-pointer select-none font-semibold"
            onClick={() => handleSelect(item.toLowerCase())}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-20">
        <Button onClick={() => setOpenConfirm(true)}>Clear</Button>
        <Link to="/submit">
          <Button variant="light">Submit</Button>
        </Link>
      </div>
    </Fragment>
  );
}
