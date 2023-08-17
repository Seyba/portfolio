import React from "react";
import { TEInput, TERipple } from "tw-elements-react";

export const ContactPage = () => {
    return(
        <div>
            <section className="md:grid grid-cols-3 gap-3 mb-4">
                <div className="bg-slate-200  rounded-3xl mb-4">
                    <div>Email</div>
                    <div>Phone</div>
                    <div>Location</div>
                </div>
                    
                <div className="bg-slate-100 col-span-2 py-8 rounded-3xl mb-4">
                    <div className="flex justify-center">
                        
                        <div className="block w-3/4 rounded-3xl bg-white p-16 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <div className="py-8">
                                <h3 className="md:text-5xl font-semibold sm:text-3xl">Let's work together.</h3>
                            </div>
                            <form>
                                {/* <!--Name input--> */}
                                <TEInput
                                    type="text"
                                    label="Name"
                                    className="mb-8"
                                >

                                </TEInput>
                                {/* <!--E-mail input--> */}
                                <TEInput
                                    type="email"
                                    label="Email address"
                                    className="mb-8"
                                >

                                </TEInput>

                                <TEInput
                                    type="text"
                                    label="Subject"
                                    className="mb-8"
                                >

                                </TEInput>

                                {/* <!--Message textarea--> */}
                                <div className="relative mb-8">
                                    <textarea
                                        className="peer border-2 block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:border-neutral-600 focus:border-primary"
                                        id="exampleFormControlTextarea13"
                                        rows={4}
                                    ></textarea>
                                    <label
                                        htmlFor="exampleFormControlTextarea13"
                                        className="peer-focus:bg-white pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary dark:peer-focus:bg-neutral-700"
                                    >
                                        Message
                                    </label>
                                </div>

                                {/* <!--Checkbox--> */}
                                

                                {/* <!--Submit button--> */}
                                <TERipple rippleColor="light" className="w-full">
                                    <button
                                        type="button"
                                        className="inline-block rounded-lg w-full bg-slate-950 px-6 py-4 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-slate-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-slate-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    >
                                        Send Message
                                    </button>
                                </TERipple>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}