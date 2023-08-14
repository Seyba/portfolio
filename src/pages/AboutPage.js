export const AboutPage = () => {
    return(
        <div className="bg-slate-300 text-center max-auto">
            <div className=" bg-white max-auto">
                <h3>Image section </h3>
                <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                <div>
                    <div class="text-center sm:text-left">Hello world</div>
                </div>
            </div>
            <div class="text-center sm:text-left">Hello world</div>
        </div>
    )
}