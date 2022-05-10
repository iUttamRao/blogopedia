import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        
        <span className="headerTitleLg">BLOGOPEDIA</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
    </div>
  );
}
