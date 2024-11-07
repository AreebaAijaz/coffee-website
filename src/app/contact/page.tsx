
export default function Contact(){
    return(
        <section className="bg-primary">

             <div className="container h-[850px] w-[400px] lg:h-[800px] lg:w-[600px] bg-yellow-800">
                <h2 className="h2 text-white text-[30px] text-center">We would love to hear from you!</h2>
                <form>
                    <div className="text-white font-primary pt-8">
                    <label>Your Name:</label>
                    <input type="text" className="h-8 w-48 m-6 text-gray-700" /> <br />
                    <label>Email Address:</label>
                    <input type="email" className="h-8 w-56 m-6 text-gray-700" /> <br />
                    <label>Contact No.</label>
                    <input type="tel" className=" h-8 m-6 text-gray-700" /> <br />
                    <label>Book Your Seat:</label>
                    <input type="datetime-local" className="h-8 m-6 text-gray-700" /><br />
                    <label>Comments:</label><br />
                    <textarea className="h-24 w-48 m-2 text-gray-700"/> <br />
                    <label>Review for a Cafe:</label><br />
                    <textarea className="h-24 w-64 m-2 text-gray-700" /> <br />
                    <button className="btn mt-4">Send</button>
                    </div>
                </form>
            </div>
        </section>
    )
} 

