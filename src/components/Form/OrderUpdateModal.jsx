import {useEffect, useState} from "react";
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
import CustomSelect from "@/components/common/CustomSelect.jsx";

export default function OrderUpdateModal({ open, setOpen, order, handelSubmit, loading }) {
    const [form, setForm] = useState({
        buyerName: "",
        buyerEmail: "",
        serviceTitle: "",
        requirements: "",
        amount: "",
        status: "pending",
        deliveryDays: 3,
    });

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    useEffect(() => {
        if(order){
            setForm({
                buyerName: order.buyerName || "",
                buyerEmail: order.buyerEmail || "",
                sellerEmail: order.sellerEmail || "",
                serviceTitle: order.serviceTitle || "",
                requirements: order.requirements || "",
                amount: order.amount || "",
                status: order.status || "pending",
                deliveryDays: order.deliveryDays || 0,
            })
        }
    }, [order]);


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
                <DialogHeader>
                    <DialogTitle className="font-semibold text-lg">
                        Create New Order
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={(e)=> handelSubmit(e, form)} className="space-y-4">
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

                    {/* Status */}
                    <div className="space-y-1 w-full">
                        <Label>Order Status</Label>
                        <CustomSelect
                            value={form.status}
                            onChange={(val) => handleChange("status", val)}
                            placeholder="Select status"
                            options={[
                                { value: "pending", label: "Pending" },
                                { value: "processing", label: "Processing" },
                                { value: "delivered", label: "Delivered" },
                                { value: "revision", label: "Revision" },
                                { value: "cancelled", label: "Cancelled" },
                            ]}
                        />
                    </div>


                    <DialogFooter className="mt-4">
                        <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button disabled={loading} type="submit">
                            {loading ? "Updating..." : "Update Order"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
