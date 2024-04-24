/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffes }) => {
    const { _id, name, chef, supplier, test, category, details, photo } = coffee;

    const handleDelete = (_id) => {
        console.log('the id', _id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"

                            });
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffes(remaining)
                        }
                    })

            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex justify-between w-full  border border-red-500'>
                    <div>
                        <p>{supplier}</p>
                        <p>{test}</p>
                        <p>{chef}</p>
                        <p>{category}</p>
                        <p>{details}</p>
                    </div>
                    <div className="justify-end space-y-3 flex flex-col ">
                        <button className="btn">Watch</button>
                        <Link 

                        to={`/updateCoffee/${_id}`}>
                            <button className="btn"><FaEdit /> </button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn"><MdDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
CoffeeCard.propTypes = {
    coffee: PropTypes.node
}