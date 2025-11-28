import Section from "@/components/common/Section";
import SearchFilter from "@/components/Filters/SearchFilter";
import SortingFilter from "@/components/Filters/SortingFilter";
import Services from "@/components/Services/Services";
import React, {useEffect, useState} from "react";
import {getServices} from "@/Services/services.js";
import serviceCard from "@/components/Services/ServiceCard.jsx";
import {Spinner} from "@/components/ui/spinner.jsx";


const ServicesPage = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchServices = async () => {
        try{
            setLoading(true)
            const res = await getServices();
            if (res.success) setServices(res.data);
        }finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <>
            <Section
                className="relative bg-[url(/images/hero-bg.jpg)] bg-center bg-cover bg-no-repeat bg-blend-soft-light">
                <div className="absolute inset-0 bg-linear-to-b from-neutral-800/50 to-neutral-800/30 z-10"></div>
                <div className="main-container relative z-20">
                    <div className="flex flex-col gap-3 justify-center items-center max-w-5xl mx-auto">
                        <h4 className="w-full text-left text-4xl font-semibold text-white">
                            Service Listing
                        </h4>
                        <SearchFilter></SearchFilter>
                    </div>
                </div>
            </Section>
            <Section className="pt-10!">
                <div className="main-container">
                    <div className="max-w-7xl mx-auto">
                        <SortingFilter></SortingFilter>
                    </div>
                    <div className="mt-10">
                        {loading &&
                          <div className="w-fit mx-auto">
                              <Spinner className="size-14"/>
                          </div>
                        }
                        {services.length > 0 && (
                            <Services services={services}></Services>
                        )}
                    </div>
                </div>
            </Section>
        </>
    );
};

export default ServicesPage;
