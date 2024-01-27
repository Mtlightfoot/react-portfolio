function Contact() {
    return <div className="pageBorder container-lg text-center">
        <div className="row mt-5 mb-5">
            <div className="col-lg-6">
                <h2 className="underline pb-3 mb-3">Contact Me</h2>
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Your Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Subject</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Subject of your Email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </div>
            <div className="col-lg-6">
                <h2 className="underline pb-3 mb-3">Places you can find me</h2>
            </div>

        </div>
    </div>
}

export default Contact;