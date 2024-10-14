import {Tooltip, Button} from "@nextui-org/react";
import logo from '../assets/images/insignia.png'
import flag from '../assets/images/flag.png'

export default function ToolTip() {
  const colors = ["foreground"];

  return (
    <div className="flex flex-wrap gap-6">
      {colors.map((color) => {
        return (

          <>
            <Tooltip key={color} color={color} content="Insignia oficial del ZOB" closeDelay={1000} placement="bottom">
                <Button variant="flat" color={color} className="capitalize h-auto min-w-max p-0 pt-4 rounded-none">
                    <img src={logo} className="h-16"/>
                </Button>
            </Tooltip>
            <Tooltip key={color} color={color} content="Bandera oficial del ZOB" closeDelay={1000} placement="right">
                <Button variant="flat" color={color} className="capitalize h-auto min-w-max p-0 pt-4 rounded-none ">
                    <img src={flag} className="h-16 "/>
                </Button>
            </Tooltip>
          </>
        )
      })}
    </div>
  );
}