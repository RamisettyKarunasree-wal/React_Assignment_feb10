import Categories from "./Categories";
function Menu() {
    return (
        <div class="menu">
            <Categories></Categories>
            <a href="#">Sort by</a>
            <a href="#">Filters</a>
            <a href="#">Home</a>
        </div>
    );
}
export default Menu;