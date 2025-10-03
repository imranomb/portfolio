export default function Contact()
{
    return (
        <div className="min-h-[100svh] flex flex-col gap-4 justify-center items-center">
            <form className="flex flex-col justify-center items-start !p-5 bg-gray-500 border-4 border-white">
            <div className="contact_div">
                <span className="w-16">From: </span>
                <input className="contact_input" type="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className="contact_div">
                <span className="w-16">To: </span>
                <input className="contact_input" type="email"  name="email" value={"imran2017omerbasic@hotmail.com"} readOnly required />
            </div>
            <div className="message contact_div">
                <span>Message: </span>
                <textarea  name="message" className="contact_input min-h-[200px]" placeholder="Your message..." required></textarea>
                
            </div>
            <button type="submit" className="selectionbutton !mt-3">Send</button>
        </form>
        <h1 className="text-red-700 font-bold">*currently not in function, you can contact me with the mail above</h1>
        </div>
    )
}