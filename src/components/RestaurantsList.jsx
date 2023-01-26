import React, { useEffect } from 'react'
import ResturantFinder from '../apis/ResturantFinder'

const RestaurantsList = () => {
    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await ResturantFinder.get("/");
                console.log(response);
            } catch (err) {}
        };
        fetchData();
    }, []);
    return (
        <div className="list-group">
            <table className=" table  table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>macdonald</td>
                        <td>macdonald</td>
                        <td>thankot</td>
                        <td>$$</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete </button></td>


                    </tr>
                    <tr>
                        <td>macdonald</td>
                        <td>macdonald</td>
                        <td>thankot</td>
                        <td>$$</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete </button></td>


                    </tr>
                    <tr>
                        <td>macdonald</td>
                        <td>macdonald</td>
                        <td>thankot</td>
                        <td>$$</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete </button></td>


                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default RestaurantsList
