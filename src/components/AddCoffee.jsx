import Navbar from "./Navbar";
import Swal from 'sweetalert2'

const AddCoffee = () => {


    const handleAddCoffee = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const test = e.target.test.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;
        const addCoffee = { name, chef, supplier, test, category, details, photo }
        console.log(addCoffee)

        fetch('http://localhost:5000/coffees', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCoffee)

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffee added successfuly',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="hero-content hero min-h-screen">
                <div className=" shrink-0 shadow-2xl">

                    <form onSubmit={handleAddCoffee} className="p-8 rounded-xl  bg-[#F4F3F0]">
                        {/* name and ched */}
                        <div className="flex">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Coffee Name</span>
                                </label>
                                <input type="text" name="name" placeholder="coffee name" className="input input-bordered" />
                            </div>
                            <div className="form-control ml-3">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input type="number" name="chef" placeholder="inter coffee chef" className="input input-bordered" />
                            </div>
                        </div>


                        {/* supplier and test */}
                        <div className="flex">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Supplier</span>
                                </label>
                                <input type="text" name="supplier" placeholder="Inter supplier" className="input input-bordered" />
                            </div>
                            <div className="form-control ml-3">
                                <label className="label">
                                    <span className="label-text">Test</span>
                                </label>
                                <input type="test" placeholder="Test " className="input input-bordered" />
                            </div>
                        </div>



                        {/* category and d */}
                        <div className="flex">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Category</span>
                                </label>
                                <input type="text" name="category" placeholder="Inter category" className="input input-bordered" />
                            </div>

                            <div className="form-control ml-3">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" name="details" placeholder="Details" className="input input-bordered" />
                            </div>
                        </div>

                        <div className="form-control ml-3">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered wfull" />
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" name="test" value="Add a coffee" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default AddCoffee;