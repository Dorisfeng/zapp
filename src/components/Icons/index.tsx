import classnames from "classnames";
import "./style.scss";

export type IconType = "react" | "loading";

type IconProps = {
  type: IconType;
  spin?: boolean;
  className?: string;
  color?: string;
  style?: Object;
  [key: string]: any;
};

const defaultProps: IconProps = {
  type: "loading",
  spin: false,
};

export default function Icon(props = defaultProps) {
  const { type, className, spin, color, style, ...other } = props;

  const cls = classnames(
    {
      iconfont: true,
      "icon-spin": !!spin || type === "loading",
      [`icon-${type}`]: true,
    },
    className
  );

  const _style = { ...style, color };

  return <i className={cls} style={_style} {...other} />;
}
