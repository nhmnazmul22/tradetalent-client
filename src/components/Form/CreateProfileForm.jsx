import React from "react";
import InputBox from "@/components/common/InputBox";
import Button from "@/components/common/Button";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
import {Label} from "@/components/ui/label.jsx";
import {Spinner} from "@/components/ui/spinner.jsx";

const CreateProfileForm = ({handleSubmit, loading}) => {

    return (
        <motion.form
            variants={staggerContainer}
            initial="start"
            animate="end"
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
        >
            {/* Title */}
            <motion.h2
                variants={fadeInUp}
                className="text-2xl font-semibold text-blue-600 dark:text-blue-400 text-center"
            >
                Create Seller Profile
            </motion.h2>

            {/* Basic Details */}
            <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
                <InputBox
                    label="Title"
                    name="title"
                    placeholder="Full Stack Developer"
                    isRequired={true}
                />

                <InputBox
                    label="Location"
                    name="location"
                    placeholder="Ex: Dhaka, Bangladesh"
                />

                <InputBox
                    label="Price"
                    name="price"
                    placeholder="100"
                    type="number"
                    isRequired={true}
                />

                <InputBox
                    label="Pricing Type"
                    name="pricingType"
                    placeholder="Hourly / Fixed"
                    isRequired={true}
                />

                <div className="md:col-span-2">
                    <InputBox
                        label="Short Bio"
                        name="bio"
                        placeholder="One line about yourself"
                        isRequired={true}
                    />
                </div>

                <div className="md:col-span-2">
                    <Label className="mb-2 text-base">Description</Label>
                    <textarea
                        name="description"
                        placeholder="Explain your background and experience"
                        className="w-full p-3 border border-neutral-200 rounded-md ouline-none min-h-[120px]"
                    />
                </div>
            </motion.div>

            {/* Separator */}
            <motion.div variants={fadeInUp}>
                <Separator />
            </motion.div>

            {/* Skill Section */}
            <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
                <InputBox
                    label="Skills"
                    name="skills"
                    placeholder="React, Node, MongoDB"
                />

                <InputBox
                    label="Languages"
                    name="languages"
                    placeholder="English, Bangla"
                />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fadeInUp}>
                <Button variant="default" type="submit" className="mt-4">
                    {loading ? <Spinner /> : "Create Profile"}
                </Button>
            </motion.div>
        </motion.form>
    );
};

export default CreateProfileForm;
