"use client"
import { addUser } from '@/actions/users'
import React from 'react'

const AddUser = () => {
  return (
    <>
        <form action={addUser} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" name="name" id="name" className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" name="email" id="email" className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">Role</label>
            <input type="text" name="role" id="role" className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add User</button>
        </form>
    </>
  )
}

export default AddUser