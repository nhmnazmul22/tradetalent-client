import React, { useState } from "react";
import { motion } from "motion/react";
import { staggerContainer } from "@/lib/motionVariants";
import CreateServiceForm from "@/components/Form/CreateServiceForm";
import Section from "@/components/common/Section";
import useAuthContext from "@/hooks/useAuth";

const CreateServicePage = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();

  const handleCreateService = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);
    const payload = {
      sellerEmail: user?.email,
      title: form.get("title"),
      description: form.get("description"),
      category: form.get("category"),
      price: Number(form.get("price")),
      images: form.get("images"),
      rating: 0,
      totalReviews: 0,
      totalSales: 0,
      startingPrice: Number(form.get("startingPrice")),
      deliveryDays: Number(form.get("deliveryDays")),
      pricing: {
        basic: {
          price: Number(form.get("basicPrice")),
          title: form.get("basicTitle"),
          description: form.get("basicDescription"),
          deliveryDays: Number(form.get("basicDelivery")),
          revisions: Number(form.get("basicRevisions")),
          includedPages: Number(form.get("basicPages")),
          supportDays: Number(form.get("basicSupport")),
          features: form.get("basicFeatures").split(","),
        },
        standard: {
          price: Number(form.get("standardPrice")),
          title: form.get("standardTitle"),
          description: form.get("standardDescription"),
          deliveryDays: Number(form.get("standardDelivery")),
          revisions: Number(form.get("standardRevisions")),
          includedPages: Number(form.get("standardPages")),
          supportDays: Number(form.get("standardSupport")),
          features: form.get("standardFeatures").split(","),
        },
        premium: {
          price: Number(form.get("premiumPrice")),
          title: form.get("premiumTitle"),
          description: form.get("premiumDescription"),
          deliveryDays: Number(form.get("premiumDelivery")),
          revisions: Number(form.get("premiumRevisions")),
          includedPages: form.get("premiumPages"),
          supportDays: Number(form.get("premiumSupport")),
          features: form.get("premiumFeatures").split(","),
        },
      },
    };

    console.log("Final Payload → ", payload);

    setLoading(false);
  };

  return (
    <Section className="pt-10 ">
      <motion.div
        className="main-container "
        variants={staggerContainer}
        initial="start"
        animate="end"
      >
        <CreateServiceForm
          handleSubmit={handleCreateService}
          loading={loading}
        />
      </motion.div>
    </Section>
  );
};

export default CreateServicePage;
