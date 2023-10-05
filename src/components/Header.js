function Header(){
    return(
        <>
        <nav className="relative container mx-auto p-6 bg-white md:container md:mx-auto" >
            <div className="flex flex-col items-center justify-between bg-slate-700 rounded-full shadow">
            <div className="flex items-center justify-between">
                <div className="hidden space-x-12 px-10 py-6 md:flex">
                    <a href="#" className="text-2xl text-teal-200 hover:text-teal-600">Home</a>
                    <a href="#" className="text-2xl text-teal-200 hover:text-teal-600">About</a>
                    <a href="#" className="text-2xl text-teal-200 hover:text-teal-600">Experience</a>
                    <a href="#" className="text-2xl text-teal-200 hover:text-teal-600">Projects</a> 
                </div>
                
                <a href="#" className="hidden p-3 px-6 pt-2 text-2xl text-white rounded-full bg-teal-600 hover:bg-teal-800 md:block">Download resume</a>
            </div>
            </div>
    </nav>

    
    </>
        

    
    )

}

export default Header;