const { NavLink } = ReactRouterDOM
export function Home() {
    return (
    <main className="main-layout">
        <h1>Welcome To My Online Book Store</h1>
        <button><NavLink to="/emailApp">Go To Email</NavLink></button>
        <button><NavLink to="/book">Go To Store</NavLink></button>
        <button><NavLink to="/keepApp">Go To Keep</NavLink></button>
    </main>
)
}