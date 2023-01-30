import "./SvgButton.css";

function SvgButton({text, icon, path, tooltip}) {
  return (
    <div className='svg-button'>
      { tooltip != null && (
        <div className='tool-tip'>Find new Articles</div>
      )}
      <a href={path}>
        <div>{text}</div>
        {icon}
      </a>
    </div>
  );
}

export default SvgButton;