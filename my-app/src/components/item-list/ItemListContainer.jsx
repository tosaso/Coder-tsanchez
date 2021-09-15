import ItemCount from '../itemCount/ItemCount'

function ItemListContainer({greeting}) {
    return (
        <main id="itemContainer">
            <p>{greeting}</p>
            <ItemCount stock={5} initial={1} />
        </main>
    );
}

export default ItemListContainer;