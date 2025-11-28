import Section from "@/components/common/Section";
import LeftSide from "@/components/ServiceDetails/LeftSide";
import RightSide from "@/components/ServiceDetails/RightSide";
import React, {useEffect, useState} from "react";
import {useLoaderData} from "react-router";
import {getSellerProfile} from "@/Services/sellerProfile.js";
import {Button} from "@/components/ui/button.jsx";
import {Edit2} from "lucide-react";
import useAuth from "@/hooks/useAuth.jsx";
import  {Link} from "react-router"

const ServiceDetail = () => {
    const {user} = useAuth()
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
                    <div  className="flex flex-col justify-start items-start lg:col-span-2">
                        {user.email === service.sellerEmail && (
                            <Button variant="outline" className="cursor-pointer mb-3 block lg:hidden " size="lg">
                                <Link to={`/update-service/?edit=${service._id}`} className="flex gap-2 items-center">
                                    <span>Edit</span>  <Edit2 className="w-5 h-5"/>
                                </Link>
                            </Button>
                        )}
                        <LeftSide service={service} seller={seller}></LeftSide>
                    </div>
                    <div className="flex flex-col justify-start items-end">
                        {user.email === service.sellerEmail && (
                            <Button variant="outline" className="cursor-pointer mb-3 hidden lg:block " size="lg">
                                <Link to={`/update-service/?edit=${service._id}`} className="flex gap-2 items-center">
                                    <span>Edit</span>  <Edit2 className="w-5 h-5"/>
                                </Link>
                            </Button>
                        )}
                        <RightSide service={service} seller={seller}></RightSide>
                    </div>
                </>
            )}
        </div>
      </div>
    </Section>
  );
};

export default ServiceDetail;
