const Section = ({
  className = "",
  title,
  isContainer = true,
  id = "",
  children,
}) => {
  return (
    <section id={id} className={`py-16 bg-black-100 ${className}`}>
      {isContainer ? (
        <div className="container flex flex-col items-stretch justify-center">
          {title && (
            <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>
          )}
          {children}
        </div>
      ) : (
        <>
          {title && (
            <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>
          )}
          {children}
        </>
      )}
    </section>
  );
};
export default Section;
