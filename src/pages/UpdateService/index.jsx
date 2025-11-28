import React, {useEffect, useState} from "react";
import {motion} from "motion/react";
import {staggerContainer} from "@/lib/motionVariants";
import Section from "@/components/common/Section";
import {getServiceById, updateService} from "@/Services/services.js";
import {useNavigate, useSearchParams} from "react-router";
import toast from "react-hot-toast";
import ServiceForm from "@/components/Form/ServiceForm.jsx";

const UpdateServicePage = () => {
    const [loading, setLoading] = useState(false);
    const [service, setService] = useState(null);
    const [searchParams] = useSearchParams()
    const navigate = useNavigate();

    const handleUpdateService = async (e, form) => {
        e.preventDefault();
        setLoading(true);
        try {
            const payload = {
                title: form.title,
                description: form.description,
                category: form.category,
                price: Number(form.startingPrice),
                images: form.images,
                rating: 0,
                totalReviews: 0,
                totalSales: 0,
                startingPrice: Number(form.startingPrice),
                deliveryDays: Number(form.deliveryDays),
                pricing: {
                    basic: {
                        title: form.pricing.basic.title,
                        description: form.pricing.basic.description,
                        price: Number(form.pricing.basic.price),
                        deliveryDays: Number(form.pricing.basic.deliveryDays),
                        revisions: Number(form.pricing.basic.revisions),
                        includedPages: Number(form.pricing.basic.includedPages),
                        supportDays: Number(form.pricing.basic.supportDays),
                        features: form.pricing.basic.features
                            .split(",")
                            .map((f) => f.trim()),
                    },
                    standard: {
                        title: form.pricing.standard.title,
                        description: form.pricing.standard.description,
                        price: Number(form.pricing.standard.price),
                        deliveryDays: Number(form.pricing.standard.deliveryDays),
                        revisions: Number(form.pricing.standard.revisions),
                        includedPages: Number(form.pricing.standard.includedPages),
                        supportDays: Number(form.pricing.standard.supportDays),
                        features: form.pricing.standard.features
                            .split(",")
                            .map((f) => f.trim()),
                    },
                    premium: {
                        title: form.pricing.premium.title,
                        description: form.pricing.premium.description,
                        price: Number(form.pricing.premium.price),
                        deliveryDays: Number(form.pricing.premium.deliveryDays),
                        revisions: Number(form.pricing.premium.revisions),
                        includedPages: Number(form.pricing.premium.includedPages),
                        supportDays: Number(form.pricing.premium.supportDays),
                        features: form.pricing.premium.features
                            .split(",")
                            .map((f) => f.trim()),
                    },
                },
            };
            const response = await updateService(service?._id, payload);

            if (response.success) {
                toast.success(`Service updated successfully!`);
                navigate("/services");
            }
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        const fetchService = async () => {
            const serviceId = searchParams.get("edit");
            const result = await getServiceById(serviceId);
            if (result.success) {
                setService(result.data);
            }
        }
        fetchService();
    }, [searchParams]);

    return (
        <Section className="pt-10 ">
            <motion.div
                className="main-container "
                variants={staggerContainer}
                initial="start"
                animate="end"
            >
                <ServiceForm
                    handleSubmit={handleUpdateService}
                    loading={loading}
                    service={service}
                />
            </motion.div>
        </Section>
    );
};

export default UpdateServicePage;
