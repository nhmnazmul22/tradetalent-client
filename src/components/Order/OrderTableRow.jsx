import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Eye } from "lucide-react";
import { Link } from "react-router";

const statusColors = {
    processing: "bg-blue-100 text-blue-600",
  delivered: "bg-green-100 text-green-600",
  revision: "bg-yellow-100 text-yellow-600",
};

const OrderTableRow = ({ order }) => {
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
        <Link to={`/my-orders`}>
          <Eye className="h-5 w-5 cursor-pointer hover:text-blue-600" />
        </Link>

        <MessageCircle className="h-5 w-5 cursor-pointer hover:text-green-600" />
      </TableCell>
    </TableRow>
  );
};

export default OrderTableRow;
