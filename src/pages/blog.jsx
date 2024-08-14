import { Helmet } from 'react-helmet-async';

import Organizations from 'src/sections/blog/view/Organizations';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Blog | Minimal UI </title>
      </Helmet>

      <Organizations />
    </>
  );
}
