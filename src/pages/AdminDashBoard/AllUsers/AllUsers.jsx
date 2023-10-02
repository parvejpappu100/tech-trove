import React from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await fetch("http://localhost:5000/users");
        return res.json();
    });

    const handleMakeAdmin = (user) => {
        const updatedRole = { role: "admin" };
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(updatedRole)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Success!',
                                `${user.name} is Admin Now `,
                                'success'
                            )
                        }
                    })
            }
        })

    };
    const handleMakeUser = (user) => {
        const updatedRole = { role: "user" };
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(updatedRole)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Success!',
                                `${user.name} is only user Now `,
                                'success'
                            )
                        }
                    })
            }
        })

    };

    return (
        <div>
            <Helmet>
                <title>All Users | Tech Trove</title>
            </Helmet>
            <PageTitle currentPage={"All Users"}></PageTitle>
            <div className='max-w-[1120px] mx-auto my-24 px-4'>
                <h3 className='text-2xl font-semibold'>Total Users : {users.length}</h3>
                <div className="overflow-x-auto w-full  mt-12">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='bg-[#113366] text-white text-xl'> # </th>
                                <th className='bg-[#113366] text-white text-xl'> Image</th>
                                <th className='bg-[#113366] text-white text-xl'>Name</th>
                                <th className='bg-[#113366] text-white text-xl'>Email</th>
                                <th className='bg-[#113366] text-white text-xl'>Role</th>
                                <th className='bg-[#113366] text-white text-xl'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <td>
                                        <h3 className='text-2xl font-bold'>{index + 1}</h3>
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h4>{user.name}</h4>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        <div className='flex gap-5'>
                                            <div>
                                                {
                                                    user.role === "admin" ? "Admin" : <button onClick={() => handleMakeAdmin(user)} className="btn normal-case btn-xs text-[12px]">
                                                        Make Admin
                                                    </button>
                                                }
                                            </div>
                                            <div>
                                                {
                                                    user.role === "user" ? "User" : <button onClick={() => handleMakeUser(user)} className="btn normal-case btn-xs text-[12px]">
                                                        Make User
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <button className="btn bg-red-700 duration-500 text-white hover:text-black border-none h-10 w-10 btn-xs">
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;