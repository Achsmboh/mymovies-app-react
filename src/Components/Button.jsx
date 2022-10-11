function ButtonPrimary(props) {
  return (
    <button className="rounded-lg border bg-slate-400 p-3 text-center font-bold text-black hover:bg-white hover:text-yellow-500 dark:bg-slate-300 dark:hover:bg-slate-400 dark:hover:text-white" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

function ButtonSecondary(props) {
  return (
    <button className="m-5 rounded-lg border bg-slate-200 p-3 text-black" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export { ButtonPrimary, ButtonSecondary };
