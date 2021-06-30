
export default function CreateForm({ onCreate }) {

    return (<>
        <form onSubmit={onCreate} className="items-center w-full h-full bg-green-300 border-t ">
            <h1 className="m-4">Create Cookie Stand</h1>

            <label>Location</label>
            <input name="location" type="text" className="w-10/12 my-5" />
            <br />
            <label className="m-8 -ml-52">Minimum customers per hour</label>
            <label className="m-8">Maximum customers per hour</label>
            <label className="m-8">Avrage cookies per hour</label>
            <br />
            <input name="min" className="m-8" type="text" />
            <input name="max" className="m-8" type="text" />
            <input name="avg" className="m-8" type="text" />

            <button type="submit" className="w-1/5 h-12 bg-green-700 ">Create</button>
        </form>
    </>
    )
}