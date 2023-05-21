

export default function Filters({ setCacti, allCacti }) {

    const handleFilters = (e) => {
        let filteredArr;
        if (e.target.value === "flowers") {
            filteredArr = allCacti.filter((cactus) => cactus.flowers)
        } if (e.target.value === "edible") {
            filteredArr = allCacti.filter((cactus) => cactus.edible)
        } if (e.target.value === "all") {
            filteredArr = allCacti.filter((cactus) => cactus.name)
        }
        setCacti(filteredArr)
    }
    return (
        <div>
            <form>
                <select onChange={handleFilters}>
                    <option selected disabled>Filter by:</option>
                    <option value="all">Show All</option>
                    <option value="edible">Edible</option>
                    <option value="flowers">Blooms flowers</option>
                </select>
            </form>
        </div>
    )
}
