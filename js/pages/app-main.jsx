const { NavLink, withRouter } = ReactRouterDOM

// import {} from "../../img/mail-home.png"
export function Main() {
    return (
        <main className="home-main flex">
            <section className="home-image">
                <h1>Welcome To Appsus</h1>
            </section>
            <section className="home-details flex">
                <NavLink to="/emailApp">
                    <div className="icon-card flex">
                        <img src="../../img/mail-home.png" />
                        <p>Write emails yours friends</p>
                    </div>
                </NavLink>
                <NavLink to="/keepApp">
                    <div className="icon-card flex">
                        <img src="../../img/notes-home.png" />
                        <p>Edit your notes with friends </p>
                    </div>
                </NavLink>
                <NavLink to="/bookApp">
                    <div className="icon-card flex">
                        <img src="../../img/books-home.png" />
                        <p>Read your favourite Books </p>
                    </div>
                </NavLink>


            </section>
        </main >
    )
}