export const EmptyBucket = () => {
  return (
    <>
      <div className="" id="empty_basket">
        <h2>Empty basket!</h2>
        <p>This basket is empty, send requests to <kbd className="basket_uri">https://.....</kbd>
          <kbd className="copy-url-btn"><span title="Copy URL" className="glyphicon glyphicon-copy"></span></kbd> and they will appear here.</p>
      </div>
    </>
  )
}
