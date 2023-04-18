interface Props {
    text: string;
  }
  
  export default function MenuButton({ text }: Props) {
    return (
      <div className="">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          {text}
        </button>
      </div>
    );
  }
  