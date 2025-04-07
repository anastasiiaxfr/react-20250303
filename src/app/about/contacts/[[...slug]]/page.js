const ContactsPage = async ({ params }) => {
  const { slug } = await params;

  throw new Error();

  return <div>sub contacts page - {slug.join(",")}</div>;
};

export default ContactsPage;
