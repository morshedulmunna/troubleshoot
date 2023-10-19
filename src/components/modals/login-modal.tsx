"use client";
import React, {useState} from "react";
// import { Modal } from "@/components/ui/modal";
import {Button} from "@/components/Button";
import {FacebookIcon, GoogleIcon} from "@/components/Icons";
import {Modal} from "@/components/Modal";
import {Prose} from "@/components/Prose";
import axios from "@/lib/axios";
import Cookies from "js-cookie";
import Link from "next/link";
import {SubmitHandler, useForm} from "react-hook-form";
import {Logo} from "../Logo";

type loginInput = {
    email: string;
    password: string;
};

const LoginModal: React.FC<PageProps> = ({children}) => {
    const [loginFormTab, setLoginFormTab] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors},
    } = useForm<loginInput>();

    const onSubmit: SubmitHandler<loginInput> = async (data) => {
        try {
            const request = await axios.post(
                `auth/customer/login?login_field=${data.email}&password=${data.password}`
                // `auth/customer/login?login_field=bruce@gmail.com&password=12345678`
            );
            const response: AxiosResponse = await request.data;
            Cookies.set("authToken", response.token);
        } catch (error) {}

        reset();
    };

    return (
        <React.Fragment>
            <Modal
                className="lg:w-[100%] overflow-clip"
                // isOpen={true}
                // onClose={() => console.log}
                // title="Skills"
                // description="Hello world"
            >
                <Prose enable={false} className="py-14">
                    <div className="relative w-full flex justify-center">
                        <Logo className="h-auto w-28" />
                    </div>
                    <div className="relative flex justify-center py-8">
                        <div className="relative w-full max-w-xs space-y-4">
                            <div className="relative">
                                <p className="lead font-semibold text-base text-center">
                                    Login with
                                </p>
                            </div>
                            <Button
                                onClick={() => setLoginFormTab(!loginFormTab)}
                                variant="filled"
                                className="w-full bg-primary-500/90 hover:bg-primary-500 rounded-md py-3 font-semibold text-base"
                            >
                                Mobile Number or Email
                            </Button>
                            {loginFormTab ? (
                                <>
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        action=""
                                    >
                                        <input
                                            {...register("email")}
                                            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
                                            id="grid-first-name"
                                            type="text"
                                            placeholder="Email"
                                            required
                                        />

                                        <input
                                            {...register("password")}
                                            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
                                            id="grid-first-name"
                                            type="password"
                                            placeholder="Password"
                                            required
                                        />

                                        <button
                                            type="submit"
                                            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
                                        >
                                            Login
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <>
                                    <div className="relative flex items-center justify-between gap-4">
                                        <Button
                                            variant="filled"
                                            className="w-full flex justify-center items-center bg-primary-50/90 hover:bg-primary-50 rounded-md py-2.5 font-semibold text-sm text-slate-600"
                                        >
                                            <FacebookIcon className="h-7 w-7 mr-2" />
                                            Facebook
                                        </Button>
                                        <Button
                                            variant="filled"
                                            className="w-full flex justify-center items-center bg-primary-50/90 hover:bg-primary-50 rounded-md py-2.5 font-semibold text-sm text-slate-600"
                                        >
                                            <GoogleIcon className="h-6 w-6 mr-2" />
                                            Google
                                        </Button>
                                    </div>
                                </>
                            )}

                            <p className="text-center font-medium">
                                By Signing in i agree to the{" "}
                                <Link
                                    href="/terms-and-conditions"
                                    className="text-sky-400 hover:text-sky-400"
                                >
                                    Terms & Condition
                                </Link>
                            </p>
                            <p className="text-center font-semibold">
                                Don’t have an account?
                            </p>

                            <div className="relative flex justify-center">
                                <Button
                                    className="rounded-md ring-primary-500 hover:ring-primary-600 text-sm  py-2 px-5 "
                                    variant="outline"
                                >
                                    Signup Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </Prose>
            </Modal>
        </React.Fragment>
    );
};

export default LoginModal;
