type Props = {
  firstWord: string;
  firstPart: string;
  secondPart: string;
};

export default function CustomTitle({
  firstWord,
  firstPart,
  secondPart,
}: Props) {
  return (
    <div className="w-full">
      <h2
        className={`w-[70%] sm:w-[50%] mr-auto text-right text-gray-200 text-xl md:text-2xl lg:text-4xl`}
      >
        <span className=" font-bold text-blue-200">{firstWord}</span>
        {`${" "} ${firstPart}`}
      </h2>
      <h2
        className={`w-[61%] sm:w-[51%] ml-auto text-left text-xl md:text-2xl lg:text-4xl`}
      >
        {secondPart}
      </h2>
    </div>
  );
}
