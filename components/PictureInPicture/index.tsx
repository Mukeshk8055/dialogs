import { Rnd } from "react-rnd";
import "./index.css";
import MessageIcon from "@material-ui/icons/Message";
import { useEffect, useState } from "react";

// Interfaces
interface PipInterface {
  boundClass?: string;
  children: any;
  minimize?: boolean;
  minimizeIcon?: any;
  minimizedHeight?: number;
  minimizedWidth?: number;
  style?: Object;
  minWidth?: number;
  minHeight?: number;
  lockAspectRatio?: boolean;
  config?: PipDefaultConfigInterface;
  onMinimizeDoubleClick?: Function;
  onResizeComplete?: Function;
  onDragComplete?: Function;
  position?: PositionInterface;
}

interface PositionInterface {
  x: number;
  y: number;
}

interface PipDefaultConfigInterface {
  x: number;
  y: number;
  width: any;
  height: any;
}

const PictureInPicture = ({
  boundClass = ".avContainer",
  children,
  minimize = true,
  minimizeIcon = <MessageIcon />,
  minimizedHeight = 50,
  minimizedWidth = 50,
  style,
  onMinimizeDoubleClick = () => {},
  onResizeComplete = () => {},
  onDragComplete = () => {},
  lockAspectRatio = true,
  minWidth,
  minHeight,
  position = { x: 0, y: 0 },
}: PipInterface) => {
  const [size, setSize] = useState({
    width: minWidth,
    height: minHeight,
  });
  const [internalPosition, setInternalPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (minimize) {
      setSize({ width: minimizedWidth, height: minimizedHeight });
    } else {
      setSize({ width: minWidth, height: minHeight });
    }
  }, [minWidth, minHeight, minimize, minimizedHeight, minimizedWidth]);

  useEffect(() => {
    setInternalPosition({ x: position.x, y: position.y });
  }, [position.x, position.y]);

  const derivedStyle = style || {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
  };

  if (minimize) {
    derivedStyle["borderRadius"] = "50%";
  }

  const doubleClickHandler = () => {
    /*
     *   The handler is executed if the mode is minimized
     */
    if (minimize) {
      onMinimizeDoubleClick();
    }
  };

  const onResizeHandler = (e, dir, elementRef, delta) => {
    setSize({
      width: size.width + delta.width,
      height: size.height + delta.height,
    });
    onResizeComplete(e, dir, elementRef, delta);
  };

  const onPositionHandler = (e, data) => {
    setInternalPosition({ x: data.x, y: data.y });
    onDragComplete(e, data)
  };

  return (
    <div onDoubleClick={doubleClickHandler}>
      <Rnd
        size={size}
        position={internalPosition}
        enableResizing={!minimize}
        bounds={boundClass}
        style={derivedStyle}
        onResizeStop={onResizeHandler}
        onDragStop={onPositionHandler}
        lockAspectRatio={lockAspectRatio}
        minWidth={minWidth}
        minHeight={minHeight}
      >
        {minimize ? minimizeIcon : children}
      </Rnd>
    </div>
  );
};

export default PictureInPicture;
