"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Suspense, useRef, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import Fox from "@models/Fox";
import Loader from "@components/Loader";

const formSchema = z.object({
	name: z.string().min(1, {
		message: "This field has to be filled.",
	}),
	email: z
		.string()
		.min(1, {
			message: "This field has to be filled.",
		})
		.email("This is not a valid email."),
	message: z.string().min(1, {
		message: "This field has to be filled.",
	}),
});

const Contact = () => {
	const [loading, setLoading] = useState(false);
	const [currentAnimation, setCurrentAnimation] = useState("idle");
	const formRef = useRef<HTMLFormElement>(null);
	const { toast } = useToast();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	// submit function
	function onSubmit(values: z.infer<typeof formSchema>) {
		setLoading(true);
		setCurrentAnimation("hit");
		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!,
				{
					name: values.name,
					email: values.email,
					message: values.message,
				},
				process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!
			)
			.then(() => {
				toast({
					className: "bg-green-500 text-white",
					description: (
						<p className="flex space-x-3 text-sm font-medium items-center">
							<CheckCircle className="h-4 w-4 me-2" />
							Message send successful
						</p>
					),
				});
				form.reset();
			})
			.catch(() => {
				toast({
					variant: "destructive",
					description: (
						<p className="flex space-x-3 text-sm font-medium items-center">
							<XCircle className="h-4 w-4 me-2" />
							Message send unsuccessful
						</p>
					),
				});
			})
			.finally(() => {
				setLoading(false);
				setTimeout(() => {
					setCurrentAnimation("idle");
				}, 3000);
			});
	}

	const handleFocus = () => {
		setCurrentAnimation("walk");
	};
	const handleBlur = () => {
		setCurrentAnimation("idle");
	};

	return (
		<section className="flex lg:flex-row flex-col relative max-container">
			<Toaster />
			<div className="w-full flex flex-col lg:flex-row">
				<div className="w-full">
					<h1 className="head-text">Get in Touch</h1>
					<Form {...form}>
						<form
							ref={formRef}
							onSubmit={form.handleSubmit(onSubmit)}
							className="w-full flex flex-col gap-7 mt-14">
							{/* name */}
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white">Name</FormLabel>
										<FormControl>
											<Input
												className="input focus-visible:ring-0 focus-visible:ring-offset-0"
												placeholder="Kavindu Manahara"
												{...field}
												onFocus={handleFocus}
												onBlur={handleBlur}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* email */}
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white">Email</FormLabel>
										<FormControl>
											<Input
												className="input focus-visible:ring-0 focus-visible:ring-offset-0"
												placeholder="example@kavindu.me"
												{...field}
												onFocus={handleFocus}
												onBlur={handleBlur}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* message */}
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white">Message</FormLabel>
										<FormControl>
											<Textarea
												rows={6}
												className="input focus-visible:ring-0 focus-visible:ring-offset-0"
												placeholder="Type Something..."
												{...field}
												onFocus={handleFocus}
												onBlur={handleBlur}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								className="btn uppercase tracking-widest"
								disabled={loading}
								onFocus={handleFocus}
								onBlur={handleBlur}>
								{loading ? "Sending..." : "Send Message"}
							</Button>
						</form>
					</Form>
				</div>
				<div className="w-full lg:min-w-[50%] lg:h-auto md:h-[550px] h-[350px]">
					<Canvas
						camera={{
							position: [0, 0, 5],
							fov: 75,
							near: 0.1,
							far: 1000,
						}}>
						<directionalLight
							intensity={2.5}
							position={[0, 0, 1]}
						/>
						<ambientLight intensity={0.4} />
						<Suspense fallback={<Loader />}>
							<Fox
								currentAnimation={currentAnimation}
								position={[0.5, 0.35, 0]}
								rotation={[-12.6, -0.7, 0]}
								scale={[0.5, 0.5, 0.5]}
							/>
						</Suspense>
					</Canvas>
				</div>
			</div>
		</section>
	);
};

export default Contact;
