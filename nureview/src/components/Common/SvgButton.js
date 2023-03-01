import "../../style/Common/SvgButton.css";

function SvgButton({text, icon, path, tooltip}) {
  return (
    <div className='svg-button'>
      { tooltip != null && (
        <div className='tool-tip'>{tooltip}</div>
      )}
      <a href={path}>
        <div>{text}</div>
        {icon}
      </a>
    </div>
  );
}

export default SvgButton;