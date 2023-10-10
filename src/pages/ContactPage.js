import {React, useState} from "react";
import { Link } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        fName: '',
        email: '', 
        subject: '',
        message: ''
    })

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })

    }
    
    const handleSubmit = e => {
        e.preventDefault()
        console.log(formData)
        setFormData({
            fName: '',
            email: '', 
            subject: '',
            message: ''
        })
    }
    return(
        <div className="py-8">
            <section className="md:grid grid-cols-3 gap-3 mb-4 animate-fade-down animate-once animate-duration-1000 animate-ease-linear">
                <div className="ml-4 md:ml-1 bg-gray-100  py-8 rounded-3xl mb-4">
                    <h3 className="text-left md:ml-32 mb-6">CONTACT INFO</h3>
                    <div className="md:ml-24 mb-16">
                        <div className="flex md:justify-center">
                            <div className="bg-white p-6 rounded-xl mr-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>

                            <div className="">
                                <h4 className="text-xl font-semibold text-gray-400">MAIL ME</h4>
                                <h5 className="text-sm font-semibold">mahamadoutirera347@gmail.com</h5>
                                <h5 className="text-sm font-semibold">mmohmo@yahoo.com</h5>
                            </div>
                        </div>
                    </div>
                    <div className="md:ml-1 mb-16">
                        <div className="flex md:justify-center">
                            <div className="bg-white p-6 rounded-xl mr-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <div className="">
                                <h4 className="text-xl font-semibold text-gray-400">CONTACT ME</h4>
                                <h5 className="text-sm font-semibold">+1 646-479-9306</h5>
                            </div>

                        </div>
                    </div>
                    <div className="md:ml-6 mb-16">
                        <div className="flex md:justify-center">
                            <div className="bg-white p-6 rounded-xl mr-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-400">LOCATION</h4>
                                <h5 className="text-sm font-semibold">Bronx, New York</h5>
                            </div>
                        </div>
                    </div>
                    {/**Social Info Section */}
                    <h3 className="text-left md:ml-32 mb-4 mt-8">SOCIAL INFO</h3>
                    <div className="py-8">
                        <div className="flex md:justify-center ">
                            <div className=" bg-white p-6 rounded-full mr-4">
                                <Link to="https://www.linkedin.com/in/mahamadou-tirera-950939aa/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        fill="currentColor"
                                        style={{ color: "#0077b5" }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="bg-white p-6 rounded-full mr-4">
                                <Link to="https://github.com/Seyba">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        fill="currentColor"
                                        style={{ color: "#333" }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="bg-white p-6 rounded-full">
                                <Link to="https://twitter.com/i/flow/login">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        fill="currentColor"
                                        style={{ color: "#1da1f2" }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                {/*Contact form section */}
                <div className="bg-gray-100 col-span-2 py-8 rounded-3xl mb-4">
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
                                    name="fName"
                                    value={formData.fName}
                                    onChange={handleChange}
                                >

                                </TEInput>
                                {/* <!--E-mail input--> */}
                                <TEInput
                                    type="email"
                                    label="Email address"
                                    className="mb-8"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                >

                                </TEInput>

                                {/* <!--Subject input--> */}
                                <TEInput
                                    type="text"
                                    label="Subject"
                                    className="mb-8"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                >

                                </TEInput>

                                {/* <!--Message textarea--> */}
                                <div className="relative mb-8">
                                    <textarea
                                        className="peer border-2 block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:border-neutral-600 focus:border-primary"
                                        id="exampleFormControlTextarea13"
                                        rows={4}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
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
                                        onClick={handleSubmit}
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