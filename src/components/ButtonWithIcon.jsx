import Link from "next/link";
import clsx from "clsx";

export default function ButtonWithIcon({
  icon,
  hrefLink,
  internalLink,
  hanldeOnClick,
  label,
  iconSpanCustomStyles = "",
  hideLabelOnMobile = true,
}) {
  return (
    <div
      className="common-ltr-btn-parent group"
      //   onClick={hanldeOnClick}
    >
      {hrefLink ? (
        <a href={hrefLink} className="flex items-center" target="_blank">
          <ButtonContent
            icon={icon}
            label={label}
            hideLabelOnMobile={hideLabelOnMobile}
            iconSpanCustomStyles={iconSpanCustomStyles}
          />
        </a>
      ) : (
        <Link href={internalLink} className="flex items-center">
          <ButtonContent
            icon={icon}
            label={label}
            hideLabelOnMobile={hideLabelOnMobile}
            iconSpanCustomStyles={iconSpanCustomStyles}
          />
        </Link>
      )}
    </div>
  );
}

function ButtonContent({
  icon,
  label,
  hideLabelOnMobile,
  iconSpanCustomStyles,
}) {
  return (
    <>
      <span className="common-ltr-btn-trans-span"></span>
      <span className={clsx("common-ltr-btn-icon-span", iconSpanCustomStyles)}>
        {icon}
      </span>
      <span
        className={clsx(
          `common-ltr-btn-label-span ${!hideLabelOnMobile && "max-md:block"}`
        )}
      >
        {label}
      </span>
    </>
  );
}
