//creating a Dog component

export default function Dog({ name, age, breed }) {
    return (
        <section className="dog-card">
            <h2>{name}</h2>
            <ul>
                <li>Age: {age}</li>
                <li>Breed: {breed}</li>
            </ul>
        </section>
    )
}