import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, supplier, test, category, details, photo } = coffee;

    const handleUpdateCoffee = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const test = e.target.test.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;
        const updateCoffee = { name, chef, supplier, test, category, details, photo }
        console.log(updateCoffee)


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Update coffee"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'PUT', 
                    headers:{'content-type': 'application/json'},
                    body: JSON.stringify(updateCoffee)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "success!",
                                text: "coffee update successfully.",
                                icon: "success"

                            });
                        }
                    })

            }
        });
    }

    return (
        <>
            <div className="hero-content hero min-h-screen">
                <div className=" shrink-0 shadow-2xl">

                    <form onSubmit={handleUpdateCoffee} className="p-8 rounded-xl  bg-[#F4F3F0]">
                        {/* name and ched */}
                        <div className="flex">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Coffee Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} placeholder="coffee name" className="input input-bordered" />
                            </div>
                            <div className="form-control ml-3">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input type="number" name="chef" defaultValue={chef} placeholder="inter coffee chef" className="input input-bordered" />
                            </div>
                        </div>


                        {/* supplier and test */}
                        <div className="flex">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Supplier</span>
                                </label>
                                <input type="text" name="supplier" defaultValue={supplier} placeholder="Inter supplier" className="input input-bordered" />
                            </div>
                            <div className="form-control ml-3">
                                <label className="label">
                                    <span className="label-text">Test</span>
                                </label>
                                <input type="test" placeholder="Test" defaultValue={test} className="input input-bordered" />
                            </div>
                        </div>



                        {/* category and d */}
                        <div className="flex">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Category</span>
                                </label>
                                <input type="text" name="category" defaultValue={category} placeholder="Inter category" className="input input-bordered" />
                            </div>

                            <div className="form-control ml-3">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered" />
                            </div>
                        </div>

                        <div className="form-control ml-3">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered wfull" />
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" name="test" value="Update a coffee" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateCoffee;