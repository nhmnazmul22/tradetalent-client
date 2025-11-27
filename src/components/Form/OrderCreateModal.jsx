"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import {createOrder} from "@/Services/orderServices.js";
import useAuth from "@/hooks/useAuth.jsx";

export default function OrderCreateModal({ open, setOpen }) {
    const [loading, setLoading] = useState(false);
    const {user} = useAuth();

    const [form, setForm] = useState({
        buyerName: "",
        buyerEmail: "",
        serviceTitle: "",
        requirements: "",
        amount: "",
        status: "pending",
        deliveryDays: 3,
    });

    // Update fields
    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

       try{
           const response = await createOrder({...form, sellerEmail: user?.email});
           if(response.success){
               toast.success("Order created successfully!");
               // Reset Form
               setForm({
                   buyerName: "",
                   buyerEmail: "",
                   sellerEmail: "",
                   serviceTitle: "",
                   requirements: "",
                   amount: "",
                   status: "pending",
                   deliveryDays: 3,
               });
           }
       }finally {
           setLoading(false);
           setOpen(false);
       }


    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
                <DialogHeader>
                    <DialogTitle className="font-semibold text-lg">
                        Create New Order
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Buyer Name */}
                    <div className="space-y-1">
                        <Label>Name</Label>
                        <Input
                            value={form.buyerName}
                            onChange={(e) => handleChange("buyerName", e.target.value)}
                            placeholder="Enter buyer name"
                        />
                    </div>

                    {/* Buyer Email */}
                    <div className="space-y-1">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={form.buyerEmail}
                            onChange={(e) => handleChange("buyerEmail", e.target.value)}
                            placeholder="buyer@example.com"
                        />
                    </div>

                    {/* Service Title */}
                    <div className="space-y-1">
                        <Label>Service Title</Label>
                        <Input
                            value={form.serviceTitle}
                            onChange={(e) => handleChange("serviceTitle", e.target.value)}
                            placeholder="Build a modern website"
                        />
                    </div>

                    {/* Requirements */}
                    <div className="space-y-1">
                        <Label>Requirements</Label>
                        <Textarea
                            value={form.requirements}
                            onChange={(e) => handleChange("requirements", e.target.value)}
                            placeholder="Write all requirements here..."
                            rows={3}
                        />
                    </div>

                    {/* Amount */}
                    <div className="space-y-1">
                        <Label>Order Amount ($)</Label>
                        <Input
                            type="number"
                            value={form.amount}
                            onChange={(e) => handleChange("amount", e.target.value)}
                            placeholder="150"
                        />
                    </div>

                    {/* Status */}
                    <div className="space-y-1">
                        <Label>Order Status</Label>
                        <Select
                            value={form.status}
                            onValueChange={(val) => handleChange("status", val)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="processing">Processing</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Delivery Days */}
                    <div className="space-y-1">
                        <Label>Delivery Days</Label>
                        <Input
                            type="number"
                            value={form.deliveryDays}
                            onChange={(e) => handleChange("deliveryDays", e.target.value)}
                            placeholder="3"
                        />
                    </div>

                    <DialogFooter className="mt-4">
                        <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button disabled={loading} type="submit">
                            {loading ? "Creating..." : "Create Order"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
