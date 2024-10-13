import { Eye, EyeOff } from "lucide-react";
import { MouseEventHandler, useState } from "react";

import { Button } from "../ui/button";
import { Input, InputProps } from "../ui/input";

export default function PasswordInput(props: InputProps) {
  const [showPassword, changeShowPassword] = useState(false);
  const toggleShowPassword: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    changeShowPassword(!showPassword);
  };
  return (
    <div className="flex gap-4">
      <Input {...props} type={showPassword ? "" : "password"} />
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleShowPassword}
          tabIndex={-1}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
