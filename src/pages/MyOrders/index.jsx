import React, {use, useEffect, useState} from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import OrderTableRow from "@/components/Order/OrderTableRow";
import Section from "@/components/common/Section";
import {getSellerOrderData} from "@/Services/orderServices.js";
import useAuth from "@/hooks/useAuth.jsx";


const OrderTable = () => {
    const {user} = useAuth();
    const [result, setResult] = useState(null);

    useEffect(() => {
        const getOrderResult = async ()=> {
            if(user.email){
                const data = await getSellerOrderData(user.email)
                setResult(data)
            }
        }

        getOrderResult();
    }, [user.email]);



  return (
    <Section>
      <div className="main-container">
        <h2 className="text-xl font-semibold mb-4">My Orders</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Buyer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Delivery</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {result?.data.length > 0 ? (
                result?.data.map((order) => (
                <OrderTableRow key={order.id} order={order} />
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No order found
                </td>
              </tr>
            )}
          </TableBody>
        </Table>
      </div>
    </Section>
  );
};

export default OrderTable;
