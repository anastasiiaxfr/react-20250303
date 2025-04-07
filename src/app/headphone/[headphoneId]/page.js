const HeadphonePage = async ({ params }) => {
  const { headphoneId } = await params;

  return <div>HeadphonePage - {headphoneId}</div>;
};

export default HeadphonePage;
