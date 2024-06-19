function DetailItem(props: any) {
  const { label, value } = props;
  return (
    <p className="text-sm font-medium leading-none flex flex-col mb-3 mx-2">
      {label}
      <span className="md:text-3xl font-bold mt-2">{value}</span>
    </p>
  );
}

export default DetailItem;
