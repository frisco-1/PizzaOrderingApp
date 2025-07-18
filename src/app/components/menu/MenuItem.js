export default function MenuItem() {
  return (
    <div>
      <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">

        <div className="text-center">
          <img src="/pizza.png" className='max-h-auto max-h-24 block mx-auto'alt="pizza"/>

        </div>
        <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
        <p className="text-gray-500 text-sm">
          lorem5
        </p>
        <button className="mt-4 bg-red-500 text-white rounded-full px-8 py-2">
          Add to cart $12
        </button>
      </div>
    </div>
  )
}
