const Cart = ({carts}) => {
    console.log(carts);
    return (
        <div className="w-1/3 mr-8"> 
        <div className="p-10 bg-white rounded-xl" >
        <div className="text-2xl font-bold text-accent flex justify-between border-b-2 border-black">
            <h1>Name</h1>
            <h1> Price</h1>
        </div>
                    {carts.map((c,idx) => {
                        const newIdx = idx + 1;
                        return (
                       <div key={c.id}>
                        <div className="flex items-center gap-4">
                        {newIdx}
                         <div  className="flex">
                            <h1 className="text-lg font-bold ">{ c.category}</h1>
                            <h1 className="text-lg font-bold ml-20">{c.price} $</h1>
                        </div>
                        </div>
                       </div>
                        )
                    })
                }
            <div className="divider-vertical bg-black h-0.5"></div>
            <div>
                
            <div className="text-2xl font-bold text-primary">
                <h1>Total Price : {carts.reduce((p,c)=>p+c.price,0)} $</h1>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Cart;