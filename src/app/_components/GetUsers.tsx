"use client";
import React, { useState, useEffect } from 'react';
import { getUsers } from '@/actions/users'


interface User {
    id: number;
    name: string | null;
    email: string | null;
    role: string | null;
}

const GetUsers = () => {
  const [users, setUsers] = useState<User[]>([]); // users state'i oluştur

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers(); // getUsers fonksiyonunu çağır
        setUsers(data); // users state'ini güncelle
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
     <div>
        <h2 className="text-2xl font-bold mb-4">User List</h2>
        <table className="min-w-full border rounded overflow-hidden">
            <thead className="bg-gray-200">
            <tr>
                <th className="border py-2 px-4">ID</th>
                <th className="border py-2 px-4">Name</th>
                <th className="border py-2 px-4">Email</th>
                <th className="border py-2 px-4">Role</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user.id} className="bg-gray-100">
                <td className="border py-2 px-4">{user.id}</td>
                <td className="border py-2 px-4">{user.name}</td>
                <td className="border py-2 px-4">{user.email}</td>
                <td className="border py-2 px-4">{user.role}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    </>
  );
};

export default GetUsers;
