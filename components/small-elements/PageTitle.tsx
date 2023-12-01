type Props = {
  title: string;
};

export default function PageTitle({ title }: Props) {
  return (
    <div className="px-10 rounded-l-full py-4 bg-gradient-to-r from-primaryBg dark:from-[#422424] to-transparent self-end">
      <p className="text-xl md:text-3xl font-bold uppercase text-richBlack dark:text-[#a89090]">
        {title}
      </p>
    </div>
  );
}
