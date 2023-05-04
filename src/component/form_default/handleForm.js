import React from "react";
import Kesatu from "../../pages/igd/triase/component/ats";
import Kedua from "../../pages/igd/triase/component/anamnesa";
import Ketiga from "../../pages/igd/triase/component/planning";

const handleForm = (value) => {
  switch (value) {
    case "ATS":
      return <Kesatu />;
    case "Triase":
      return <Kedua />;
    case "ketiga":
      return <Ketiga />;
    default:
      return null;
  }
};

export default handleForm;
