
function Nav(props){
    const nav = props.nav;
    
    return (
        <div>
            <a class="nav-link" href="#">{nav.name}</a>
        </div>
    );
}
export default Nav;