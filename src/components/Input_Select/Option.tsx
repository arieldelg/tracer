type PropsOption = {
  last?: boolean;
  name: string;
  handleSelectOption: (element: string) => void;
};

const Option = ({ last, name, handleSelectOption }: PropsOption) => {
  return (
    <div
      className={`text-2xl ${
        last ? null : "border-b"
      } font-bold w-full h-16 flex items-center p-4 `}
      onClick={() => handleSelectOption(name)}
    >
      <p>{name}</p>
    </div>
  );
};

export default Option;
