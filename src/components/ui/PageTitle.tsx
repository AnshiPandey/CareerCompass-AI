interface Props {
  title: string;
  subtitle: string;
}

export default function PageTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div>

      <h1 className="text-4xl font-bold">

        {title}

      </h1>

      <p className="text-gray-500 mt-2">

        {subtitle}

      </p>

    </div>
  );
}