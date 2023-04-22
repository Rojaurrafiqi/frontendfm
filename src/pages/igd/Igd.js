import React from 'react'
import Pendaftaran from "./pendaftaran.js";
import Sidebar from '../templates/sidebar';
import Header from '../templates/header';


const Igd = () => {
  return (

	<div class="h-full">
		<div class="flex ...">
			<div class="flex-none ...">
				<Sidebar />
			</div>
		
			<div class="flex-auto h-screen  bg-dasar border-l-2 border-opacity-30 border-gray-300 shadow-md">
				<Header/>
				<div class="container mx-auto  px-8 pb-10">
					<Pendaftaran />
				</div>
			</div>
		</div>
	</div>

  )
}

export default Igd