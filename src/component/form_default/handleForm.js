import React from "react";
import Kesatu from "../../pages/igd/triase/component/ats";
import Kedua from "../../pages/igd/triase/component/anamnesa";
import Ketiga from "../../pages/igd/triase/component/planning";
import ResumeMedis from "../../form_library/resumeMedis";
import PengantarRawat from "../../form_library/pengantarRawat";
import SkriningDariLuarRs from "../../form_library/skriningDariLuarRs";
import ObservasiPasien from "../../form_library/observasiPasien";
import RekonsiliasiObat from "../../form_library/rekonsiliasiObat";
import PengkajianAwalMedisPasienRawatInap from "../../form_library/pengkajianAwalMedisPasienRawatInap";
import RencanaPemulanganPasien from "../../form_library/rencanaPemulanganPasien";

const handleForm = (value) => {
  switch (value) {
    case "ATS":
      return <Kesatu />;
    case "Triase":
      return <Kedua />;
    case "ketiga":
      return <Ketiga />;
    case "ResumeMedis":
      return <ResumeMedis />;
    case "PengantarRawat":
      return <PengantarRawat />;
    case "SkriningDariLuarRs":
      return <SkriningDariLuarRs />;
    case "ObservasiPasien":
      return <ObservasiPasien />;
    case "RekonsiliasiObat":
      return <RekonsiliasiObat />;
    case "PengkajianAwalMedisPasienRawatInap":
      return <PengkajianAwalMedisPasienRawatInap />;
    case "RencanaPemulanganPasien":
      return <RencanaPemulanganPasien />;

    default:
      return null;
  }
};

export default handleForm;
