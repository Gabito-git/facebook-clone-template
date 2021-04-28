
const Widget = () => {
    return (
        <div className="widget">

            <div className="widget__container">
                 <iframe 
                    title= 'widget'
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                    width="340" 
                    height="700" 
                    style={{ border: 'none', overflow: "hidden" }}
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                    
                </iframe>
            </div>
            
        </div>
    )
}

export default Widget
