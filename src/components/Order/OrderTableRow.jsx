import React, {useState} from "react";
import {TableCell, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {MessageCircle, Eye, Edit2, Trash2} from "lucide-react";
import {Link} from "react-router";
import {Button} from "@/components/ui/button.jsx";
import OrderUpdateModal from "@/components/Form/OrderUpdateModal.jsx";
import {deleteOrder, getSellerOrderData, updateOrder} from "@/Services/orderServices.js";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth.jsx";
import {Spinner} from "@/components/ui/spinner.jsx";

const statusColors = {
    pending: "bg-yellow-100 text-yellow-600",
    processing: "bg-blue-100 text-blue-600",
    delivered: "bg-green-100 text-green-600",
    revision: "bg-sky-100 text-sky-600",
    cancelled: "bg-red-100 text-red-600",
};

const OrderTableRow = ({order, setResult}) => {
    const [open, setOpen]  = useState(false)
    const [loading, setLoading] = useState(false);
    const {user} = useAuth()

    const handleUpdate = async (e, form) => {
        e.preventDefault();
        setLoading(true);

        try{
            const response = await updateOrder(order._id, form);
            if(response.success){
                toast.success("Order updated successfully!");
                const result =  await getSellerOrderData(user.email)
                setResult(result)
            }
        }finally {
            setLoading(false);
            setOpen(false);
        }
    };

    const handleDelete = async ()=>{
      try{
          const response = await deleteOrder(order._id);
          if(response.success){
              toast.success("Order delete successful")
              const result =  await getSellerOrderData(user.email)
              setResult(result)
          }
      }finally {
          setLoading(false);
      }
    }

    return (
        <TableRow>
            <TableCell className="font-medium">{order._id}</TableCell>
            <TableCell>{order?.serviceTitle}</TableCell>
            <TableCell>{order?.buyerName}</TableCell>

            <TableCell>
                <Badge className={statusColors[order.status]}>
                    {order.status.replace("_", " ").toUpperCase()}
                </Badge>
            </TableCell>

            <TableCell>{order?.deliveryDays}</TableCell>

            <TableCell className="font-semibold">${order.amount}</TableCell>

            <TableCell className="text-center flex items-center gap-3 justify-center">
                <Button size="sm" className="cursor-pointer">
                    <MessageCircle className="h-5 w-5"/>
                </Button>
                <Button onClick={()=> setOpen(true)} size="sm" className="cursor-pointer">
                    <Edit2 className="h-5 w-5"/>
                </Button>
                <Button onClick={handleDelete} size="sm" variant="destructive" className="cursor-pointer">
                    {loading ? <Spinner className="size-4"/>:  <Trash2 className="h-5 w-5"/>}
                </Button>
            </TableCell>

            <OrderUpdateModal open={open} setOpen={setOpen} order={order} handelSubmit={handleUpdate} loading={loading} />
        </TableRow>
    );
};

export default OrderTableRow;
