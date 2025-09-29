import NosotrosTitle from "@/app/[locale]/nosotros/components/NosotrosTitle";
import Team from "@/app/[locale]/nosotros/components/Team";
import Wave from "@/components/ui/Wave";

function Nosotros() {
  return (
    <>
      <NosotrosTitle />
      <Wave color="#F2F8FE" />
      <Team />
    </>
  );
}

export default Nosotros;
