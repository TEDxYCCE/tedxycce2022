const Button = ({
  title,
  url,
  className,
}: {
  title: string;
  url: string;
  className?: string;
}) => {
  return (
    <a
      className={`rounded-xl group bg-red-600 hover:bg-red-600/80 transition-colors px-6 py-3 text-white font-semibold inline-flex justify-center ${className}`}
      rel="noopener noreferrer"
      href={url}
      target="_blank"
    >
      {title}
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="inline ml-1 group-hover:translate-x-1 transition-transform"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </a>
  );
};

export default Button;
