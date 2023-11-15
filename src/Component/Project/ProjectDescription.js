import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { VscActivateBreakpoints } from "react-icons/vsc"; 

export function ProjectDescription({open, handleOpen, projectData}) {

  return (
    <>
      <Dialog
        open={open}
        handler={() => handleOpen("anything")}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>{projectData.title}</DialogHeader>
        <div className="h-96 mx-5">
            <div>
                <p className="font-serif font-bold text-black text-xl">Summery</p>
                <div>
                    {projectData?.description.map(line =><div>
                        <div className="text-black font-serif py-3 pl-5">
                            <VscActivateBreakpoints className="text-xl text-blue-900"/><p className="pl-3">{line}</p>
                        </div>
                    </div> )}
                </div>
                {/* <div className="pt-3 pl-5">
                    {projectData?.technology.map(tech => <ul className="list-disc">
                        <li className="">{tech}</li>
                    </ul>)}
                </div> */}
            </div>
        </div>
        <DialogFooter>
          <Button
            variant="gradient"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Enter</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
