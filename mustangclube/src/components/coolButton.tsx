import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/magicui/cool-mode";

export function CoolModeCustom() {
  return (
    <div className="relative justify-center">
      <CoolMode
        options={{
          particle:
            "logo_no_bk.png",
        }}
      >
        <Button>Click Me!</Button>
      </CoolMode>
    </div>
  );
}
