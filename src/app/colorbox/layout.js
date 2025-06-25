export default function ColorBoxLayout({ children, left, right }) {
  const isSidebar = true;
  return (
    <div>
      {children}
      <p>{isSidebar ? 'If isSidebar is true then Left is rendered' : 'If isSidebar is false then Right is rendered'}</p>  
      {isSidebar ? left : right}
    </div>
  )
}