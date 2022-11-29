import React from 'react';
import Beranda from './Beranda';
import { Link } from 'react-router-dom';

function Login () {

    return (
        <div className='h-screen w-full bg-blue-500'>
            <div className='flex flex-col justify-center items-center'>
                <form className='mt-24 max-w-lg w-full mx-auto bg-white p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl text-center'>Sign In</h2>
                    <div className='flex flex-col'>
                        <input type="text" placeholder='Masukkan Username' className='p-3 pr-60 mt-10 mx-auto border rounded-full' />
                        <input type="password" placeholder='Masukkan Password' className='p-3 pr-60 mt-4 mx-auto border rounded-full' />
                        <Link to='/beranda'>
                        <div class="text-center p-2 px-44 mt-4 mx-auto border rounded-lg text-white bg-blue-500 hover:bg-blue-600">
                            Login
                        </div>        
                        </Link>
                        <div className='mt-3 border bg-gray-200' />
                    </div>
                    <div className='mt-4'>
                        <div className='text-center text-blue-500'>Belum punya aku? buat akun!</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login