import { ButtonPrimary } from "./Button";

function CardRemove(props) {
  return (
    <div className="m-2 flex flex-col justify-center rounded-lg border border-red-200 bg-slate-200 p-4 shadow-lg dark:border-white dark:bg-slate-600">
      <div onClick={props.onNavigate} className="flex h-full w-full justify-center">
        <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt={props.title} />
      </div>

      <p className="text-center dark:text-white">{props.title}</p>
      <ButtonPrimary label={`Remove Favorite`} onClick={props.removeFavorite} />
    </div>
  );
}

export default CardRemove;
