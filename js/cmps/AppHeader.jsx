const { NavLink, withRouter } = ReactRouterDOM
class _AppHeader extends React.Component {
    render() {
        return (
            <section className="app-header">
                <h1 className="logo" ><NavLink exact to="/">AppSus</NavLink></h1>
                <ul className="main-nav-bar">
                    <li> <NavLink exact to="/"><i className="fa fa-home"></i></NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/book">Our Books</NavLink></li>
                    <li><NavLink to="/keepApp"><i className="fa fa-sticky-note"></i></NavLink></li>
                    <li><NavLink to="/emailApp"><i className="fa fa-envelope-open"></i></NavLink></li>
                </ul>

            </section>
        )
    }
}

export const AppHeader = withRouter(_AppHeader);