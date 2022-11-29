// HOC
// Higher Order Component
import React from "react";

import { useRouter } from "next/navigation";

function withSearchParams(Component) {
  // fungsi yang mereturnkan komponen
  function WithSearchParams(props) {
    // komponen fungsi yang menempelkan fitur navigasi
    const router = useRouter();
    return <Component router={router} {...props} />;
  }
  return WithSearchParams;
}

export default withSearchParams;
