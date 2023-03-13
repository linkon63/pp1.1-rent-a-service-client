import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render..
// This is your test publishable API key..

import '../styles/FormStyle/PaymentFormStyle/paymentStyle.css'

export default function PaymentForm({ userInfo }) {
    const stripePromise = loadStripe("pk_test_51Ie1JhBHVweerPiKD5ZiauHVxaum4XV1yLjMsUHfkMPf2T7UKNlyHOJ0u0JDpztqmYSfu9R9nRsTA8gydkmksxSr00UdXEF7bv");
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        const cData = { clientSecret: 'pi_3Ml2b0BHVweerPiK1sJIEAKm_secret_nxcmOmekaYQYuurRGkumnuCvL' }
        try {
            fetch("http://localhost:8080/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Data", data)
                    // setClientSecret(cData)
                    setClientSecret(data.clientSecret)
                    // setClientSecret("sk_test_51Ie1JhBHVweerPiK6OwuH7Le6GhqvqT902IKfI31hUySxJe9VIKrea23SBrYdndy2Btyx539mTZqHlEUJ02MttrN00pUQ5cz5F")
                });
        } catch (error) {
            console.log("Api call error")
            setClientSecret(cData)
        }
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="App">

            <h1>Payment</h1>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm userInfo={userInfo} />
                </Elements>
            )}

            {/* <div className='w-50'>
                <div class="min-w-screen min-h-screen bg-white flex items-center justify-center px-5 pb-10 ">
                    <div class="w-full mx-auto rounded-lg bg-white p-5 text-gray-700">
                        <div class="w-full pt-1 pb-5">
                            <div class="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                                <i class="mdi mdi-credit-card-outline text-3xl"></i>
                            </div>
                        </div>
                        <div class="mb-10">
                            <h1 class="text-center font-bold text-xl uppercase">Secure payment info</h1>
                        </div>
                        <div class="mb-3 flex -mx-2">
                            <div class="px-2">
                                <label for="type1" class="flex items-center cursor-pointer">
                                    <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
                                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-8 ml-3" />
                                </label>
                            </div>
                            <div class="px-2">
                                <label for="type2" class="flex items-center cursor-pointer">
                                    <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                                    <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" class="h-8 ml-3" />
                                </label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="font-bold text-sm mb-2 ml-1">Name on card</label>
                            <div>
                                <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="font-bold text-sm mb-2 ml-1">Card number</label>
                            <div>
                                <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
                            </div>
                        </div>
                        <div class="mb-3 -mx-2 flex items-end">
                            <div class="px-2 w-1/2">
                                <label class="font-bold text-sm mb-2 ml-1">Expiration date</label>
                                <div>
                                    <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                        <option value="01">01 - January</option>
                                        <option value="02">02 - February</option>
                                        <option value="03">03 - March</option>
                                        <option value="04">04 - April</option>
                                        <option value="05">05 - May</option>
                                        <option value="06">06 - June</option>
                                        <option value="07">07 - July</option>
                                        <option value="08">08 - August</option>
                                        <option value="09">09 - September</option>
                                        <option value="10">10 - October</option>
                                        <option value="11">11 - November</option>
                                        <option value="12">12 - December</option>
                                    </select>
                                </div>
                            </div>
                            <div class="px-2 w-1/2">
                                <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-10">
                            <label class="font-bold text-sm mb-2 ml-1">Security code</label>
                            <div>
                                <input class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
                            </div>
                        </div>
                        <div>
                            <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i class="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                        </div>
                    </div>
                </div>

                <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                    <div>
                        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                            <img class="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
                        </a>
                    </div>
                </div>
            </div> */}
        </div>

    )
}
