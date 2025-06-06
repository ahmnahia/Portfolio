import Link from "next/link";
import clsx from "clsx";

export default function ButtonWithIcon({
  icon,
  hrefLink,
  internalLink,
  hanldeOnClick,
  label,
  hideLabelOnMobile = true,
}) {
  return (
    <div
      className="common-ltr-btn-parent group"
    //   onClick={hanldeOnClick}
    >
      {hrefLink ? (
        <a href={hrefLink} className="flex items-center" target="_blank">
          <ButtonContent icon={icon} label={label} hideLabelOnMobile={hideLabelOnMobile}/>
        </a>
      ) : (
        <Link href={internalLink} className="flex items-center">
          <ButtonContent icon={icon} label={label} hideLabelOnMobile={hideLabelOnMobile}/>
        </Link>
      )}
    </div>
  );
}

function ButtonContent({ icon, label, hideLabelOnMobile }) {
  return (
    <>
      <span className="common-ltr-btn-trans-span"></span>
      <span className="common-ltr-btn-icon-span">
        {icon}
      </span>
      <span
        className={clsx(
          `common-ltr-btn-label-span ${
            !hideLabelOnMobile && "max-md:block"
          }`
        )}
      >
        {label}
      </span>
    </>
  );
}
