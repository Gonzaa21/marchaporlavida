import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Link} from "@nextui-org/react";

export default function ButtonModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <div className="w-full flex justify-center bg-black py-20">
        <Button onPress={onOpen} className=" p-6 text-white text-medium lg:text-large font-montserrat shadow-inner shadow-black bg-no-repeat grayscale hover:grayscale-0 bg-cover bg-center bg-[url('https://img.freepik.com/fotos-premium/banderas-israel-reino-unido-astas-bandera-lados-sobre-fondo-azul-lugar-texto-jerusalen-israeli-gran-bretana-ilustracion-3d_630687-1123.jpg?w=740')]">¿Por qué no se exiliaron a Eretz Israel?</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1"><i>¿Por qué los judíos no escapaban a Israel?</i></ModalHeader>
                <ModalBody>
                  <p> 
                    En la Alemania nazi, opositores y disidentes políticos y culturales fueron perseguidos, 
                    y muchos huyeron del país. Los judíos, además, fueron excluidos de la ciudadanía mediante 
                    leyes raciales como las "Leyes de Núremberg". Entre 1933 y 1937, 130.000 judíos abandonaron
                    Alemania, pero encontrar refugio fue difícil, ya que países como Sudáfrica, Palestina y 
                    Gran Bretaña limitaron su admisión.
                  </p>
                  <p>
                    El acuerdo Haavará fue un pacto firmado en 1933 entre el movimiento sionista y el 
                    régimen nazi. Permitía que los judíos alemanes emigraran a Palestina (que estaba bajo 
                    control británico) para escapar de la persecución nazi. A cambio, los judíos que emigraban
                    podían transferir parte de su riqueza desde Alemania a Palestina en productos alemanes, lo
                    que beneficiaba también la economía nazi.
                  </p>
                  <p>
                    El propósito de este acuerdo era facilitar la migración de judíos a Palestina y ayudar
                    a los sionistas a construir una base económica en lo que luego sería Israel. Sin embargo,
                    muchos judíos no podían migrar fácilmente a Israel porque Palestina estaba bajo dominio
                    británico, y los británicos limitaban la cantidad de inmigrantes judíos que podían entrar,
                    especialmente por la tensión con la población árabe local.
                  </p>
                </ModalBody>
                <ModalFooter className="flex justify-between">
                  <Button color="primary" variant="light" onPress={onClose}>
                    <Link isExternal showAnchorIcon href="https://www.annefrank.org/es/ana-frank/en-foco/la-imposibilidad-de-huir-1933-1942-inmigracion-judia-1933-1942/">Leyes de Núremberg</Link>
                  </Button>
                  <Button color="primary" variant="light" onPress={onClose}>
                    <Link isExternal showAnchorIcon href="https://es.wikipedia.org/wiki/Acuerdo_Haavara">Acuerdo Haavara</Link>
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
    </div>

    </>
  );
}