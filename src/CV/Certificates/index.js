import AWSCert from "./../../images/AWSCert.png";
import Azure300 from "./../../images/Azure-300.png";
import AzureFund from "./../../images/AzureFund.png";
import AWSProCert from "./../../images/solution-arch-pro.png";

import LabelledBox from "../labelledBox";
import Certificate from "./certificate";
const Certificates = () => (
  <LabelledBox
    label={"Certifications"}
    titleWidth={"28.5mm"}
    width={"50mm"}
    margin="2mm 5mm 5mm 1mm"
    titleLeft={"18mm"}
  >
    <Certificate
      image={AWSProCert}
      url="https://www.credly.com/badges/f52b8465-1222-4f50-9de7-0d32b40a7626/public_url"
    ></Certificate>
    <Certificate
      image={AWSCert}
      url="https://www.credly.com/badges/25759586-c538-4fb8-b6dc-791551984f96/public_url"
    ></Certificate>
    <Certificate
      image={Azure300}
      url="https://www.credly.com/badges/bdac0b87-3c28-4ef3-b239-ed93f629886e/public_url"
    ></Certificate>
    <Certificate
      image={AzureFund}
      url="https://www.credly.com/badges/a1132fcd-4459-4747-bcba-f3c2e9701306/public_url"
    >


    </Certificate>
  </LabelledBox>
);
export default Certificates;
