import Section from "@/components/common/Section";
import LeftSide from "@/components/ServiceDetails/LeftSide";
import RightSide from "@/components/ServiceDetails/RightSide";
import React, {useEffect, useState} from "react";
import {useLoaderData} from "react-router";
import {getSellerProfile} from "@/Services/sellerProfile.js";

const ServiceDetail = () => {
    const [seller, setSeller] = useState(null);
    const result = useLoaderData();
    const service = result.data || {};


    useEffect(() => {
       const getSeller = async ()=>{
           const result = await getSellerProfile(service.sellerEmail)
           if(result.success){
               setSeller(result.data)
           }
       }
       getSeller()
    }, [service.sellerEmail]);





  return (
    <Section className="min-h-screen">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 rel">
            {service && seller && (
                <>
                    <LeftSide service={service} seller={seller}></LeftSide>
                    <RightSide service={service} seller={seller}></RightSide>
                </>
            )}
        </div>
      </div>
    </Section>
  );
};

export default ServiceDetail;
