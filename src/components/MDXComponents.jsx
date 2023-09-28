const MDXComponents = {
  p: (props) => <p className=" mt-6" {...props} />,
  h2: (props) => (
    <h2 className="mt-10 text-2xl font-bold tracking-tight text-zinc-300 sm:text-3xl">
      {props.children}
    </h2>
  ),
  h3: (props) => (
    <h3 className="mt-8 text-xl font-bold tracking-tight text-zinc-300 sm:text-2xl">
      {props.children}
    </h3>
  ),
};

export default MDXComponents;
