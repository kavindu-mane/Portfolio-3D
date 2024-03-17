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
import { Suspense, useEffect, useRef, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import Fox from "@models/Fox";
import Loader from "@components/Loader";
import Loading from "../loading";
import FishBackground from "@components/FishBackground";

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
  const [isLoading, setIsLoading] = useState(true);
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
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!,
      )
      .then(() => {
        toast({
          className: "bg-green-500 text-white",
          description: (
            <p className="flex items-center space-x-3 text-sm font-medium">
              <CheckCircle className="me-2 h-4 w-4" />
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
            <p className="flex items-center space-x-3 text-sm font-medium">
              <XCircle className="me-2 h-4 w-4" />
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoading(false);
    }
  }, []);

  // return loading animation if page loading
  if (isLoading) return <Loading />;

  return (
    <section>
      {/* fish models background */}
      <FishBackground />
      <section className="max-container relative flex flex-col lg:flex-row">
        <Toaster />
        <div className="flex w-full flex-col lg:flex-row">
          <div className="w-full">
            <h1 className="head-text ">
              Get <span className="yellow-gradient_text"> in Touch</span>
            </h1>
            <Form {...form}>
              <form
                ref={formRef}
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-14 flex w-full flex-col gap-7"
              >
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
                  onBlur={handleBlur}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          <div className="h-[350px] w-full md:h-[550px] lg:h-auto lg:min-w-[50%]">
            <Canvas
              camera={{
                position: [0, 0, 5],
                fov: 75,
                near: 0.1,
                far: 1000,
              }}
            >
              <directionalLight intensity={2.5} position={[0, 0, 1]} />
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
    </section>
  );
};

export default Contact;
