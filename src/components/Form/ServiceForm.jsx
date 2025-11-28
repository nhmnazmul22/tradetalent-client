import React, {useEffect, useState} from "react";
import {motion} from "motion/react";
import {fadeInUp, staggerContainer} from "@/lib/motionVariants";
import {Separator} from "@/components/ui/separator";
import Button from "../common/Button";
import {Spinner} from "@/components/ui/spinner";
import InputBox from "@/components/common/InputBox";
import PricingCard from "@/components/Services/PricingCard.jsx";
import {Tabs, TabsList, TabsContent, TabsTrigger} from "@/components/ui/tabs.jsx";

const ServiceForm = ({handleSubmit, loading, service}) => {
    const [form, setForm] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
        startingPrice: "",
        deliveryDays: "",
        images: "",
        pricing: {
            basic: {
                title: "",
                price: "",
                description: "",
                deliveryDays: "",
                revisions: "",
                includedPages: "",
                supportDays: "",
                features: ""
            },
            standard: {
                title: "",
                price: "",
                description: "",
                deliveryDays: "",
                revisions: "",
                includedPages: "",
                supportDays: "",
                features: ""
            },
            premium: {
                title: "",
                price: "",
                description: "",
                deliveryDays: "",
                revisions: "",
                includedPages: "",
                supportDays: "",
                features: ""
            },
        }
    });

    useEffect(() => {
        if (service) {
            setForm({
                title: service.title || "",
                description: service.description || "",
                category: service.category || "",
                price: service.price || "",
                startingPrice: service.startingPrice || "",
                deliveryDays: service.deliveryDays || "",
                images: service.images || "",
                pricing: {
                    basic: {
                        ...service.pricing?.basic,
                        features: service.pricing?.basic?.features?.join(", ") || "",
                    },
                    standard: {
                        ...service.pricing?.standard,
                        features: service.pricing?.standard?.features?.join(", ") || "",
                    },
                    premium: {
                        ...service.pricing?.premium,
                        features: service.pricing?.premium?.features?.join(", ") || "",
                    },
                },
            });
        }
    }, [service]);

    const handleChange = (field, value) => setForm(prev => ({...prev, [field]: value}));

    const handlePricingChange = (tier, field, value) => {
        setForm(prev => ({
            ...prev,
            pricing: {...prev.pricing, [tier]: {...prev.pricing[tier], [field]: value}}
        }));
    };

    return (
        <motion.form
            onSubmit={(e) => handleSubmit(e, form)}
            variants={staggerContainer}
            initial="start"
            animate="end"
            className="max-w-3xl mx-auto flex flex-col gap-8"
        >
            <motion.h2 variants={fadeInUp}
                       className="text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400 text-center">
                {service ? "Update Service" : "Create New Service"}
            </motion.h2>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputBox
                    label="Service Title"
                    name="title"
                    value={form.title}
                    onChange={e => handleChange("title", e.target.value)} isRequired
                    placeholder="Build Modern Website"
                />
                <InputBox
                    label="Category"
                    name="category"
                    value={form.category}
                    onChange={e => handleChange("category", e.target.value)}
                    isRequired
                    placeholder="Web Development"
                />
                <InputBox
                    label="Starting Price (USD)"
                    name="startingPrice"
                    type="number" value={form.startingPrice}
                    onChange={e => handleChange("startingPrice", e.target.value)}
                    isRequired
                    placeholder="100"
                />
                <InputBox
                    label="Default Delivery Days"
                    name="deliveryDays" type="number"
                    value={form.deliveryDays}
                    onChange={e => handleChange("deliveryDays", e.target.value)}
                    isRequired
                    placeholder="2"/>
                <InputBox
                    label="Cover Image URL" name="images"
                    value={form.images}
                    onChange={e => handleChange("images", e.target.value)}
                    placeholder="https://cdn.com/image.png"
                    className="md:col-span-2"
                />
                <div className="md:col-span-2">
                    <label className="mb-2 text-base">Description</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={e => handleChange("description", e.target.value)}
                        placeholder="Write strong SEO-friendly service description..."
                        className="w-full p-3 border border-neutral-200 rounded-md min-h-[120px]"
                    />
                </div>
            </motion.div>

            <Separator/>

            <Tabs defaultValue="basic" className="w-full">
                <TabsList className="w-full">
                    <TabsTrigger value="basic">Basic</TabsTrigger>
                    <TabsTrigger value="standard">Standard</TabsTrigger>
                    <TabsTrigger value="premium">premium</TabsTrigger>
                </TabsList>
                <TabsContent value="basic">
                    <PricingCard tier="basic" pricing={form.pricing["basic"]} handleChange={handlePricingChange}/>
                </TabsContent>
                <TabsContent value="standard">
                    <PricingCard tier="standard" pricing={form.pricing["standard"]} handleChange={handlePricingChange}/>
                </TabsContent>
                <TabsContent value="premium">
                    <PricingCard tier="premium" pricing={form.pricing["premium"]} handleChange={handlePricingChange}/>
                </TabsContent>
            </Tabs>

            <motion.div variants={fadeInUp} className="text-center">
                <Button type="submit" className="mt-4">{loading ?
                    <Spinner/> : service ? "Update Service" : "Create Service"}</Button>
            </motion.div>
        </motion.form>
    );
};

export default ServiceForm;
