import ParaHeading from "./paraHeading";

const Refunds = () => (
  <div className="container p-10 mx-auto mb-5 text-center text-white border-2 border-red-800 ">
    <h1 className="mb-5 text-2xl font-medium">Return and Refund Policy</h1>
    <div className="font-mono text-justify">
      <p className="font-bold">Last updated: April 09, 2022</p>
      <p>
        Thank you for registering at TEDxYCCE 2022. If, for any reason, You are
        not completely satisfied with a purchase We invite You to review our
        policy on refunds and returns.
      </p>
      <br />
      <p>
        The following terms are applicable for any items that You purchased with
        Us.
      </p>
      <ParaHeading>Interpretation and Definitions</ParaHeading>
      <div className="mt-5 mb-2 font-bold">Interpretation</div>
      <p>
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions. The following definitions shall
        have the same meaning regardless of whether they appear in singular or
        in plural.
      </p>

      <div className="mt-5 mb-2 font-bold">Definitions</div>
      <p>
        For the purposes of this Return and Refund Policy: Company (referred to
        as either {'"the Company"'}, {'"We"'}, {'"Us"'} or {'"Our"'} in this
        Agreement) refers to TEDxYCCE, Yeshwantrao Chavan College of
        Engineering, Hingna Rd Nagpur - 441110. Goods refer to the items offered
        for sale on the Service. Orders mean a request by You to purchase Goods
        (Reservation, Ticket, Etc) from Us. Service refers to the Website.
        Website refers to TEDxYCCE 2022, accessible from http://tedxycce.in/ You
        means the individual accessing or using the Service, or the company, or
        other legal entity on behalf of which such individual is accessing or
        using the Service, as applicable.
      </p>

      <ParaHeading>Your Ticket Cancellation Rights</ParaHeading>
      <p>
        For Goods Such as registration for the event, and/or reservation for a
        seat in the event venue, please make sure to raise the request at least
        two days before the event schedule. In order to exercise Your right of
        cancellation, You must inform Us of your decision by means of a clear
        statement. You can inform us of your decision by:
        <ul className="font-bold list-disc">
          <li>
            By email:
            <a className="underline" href="mailto:tedxycce@gmail.com">
              tedxycce@gmail.com
            </a>
          </li>
        </ul>
        In case the request is raised during or after the event schedule, such
        request will stand invalid and cannot be claimed to redeem the amount.
      </p>

      <p className="mt-5">
        We will reimburse You no later than 14 days from the day on which we
        received the request and the authenticity of that request is verified to
        be valid. We will use the same means of payment as You used for the
        Order, and You will not incur any fees for such reimbursement.
      </p>

      <p className="mt-5 text-lg font-bold">For Complimentary Attendee Kits:</p>

      <p>
        The complimentary attendee kits/ gifts may be given to attendees who
        reach the venue on the event schedule and claim their registration with
        the team.
      </p>
      <p>
        In case a successfully registered attendee, due to any reasons, misses
        to attend the event within the event schedule, such an attendee can
        raise a request to claim their complimentary swag/gifts kit, in no more
        than 5 days from the date when the event was conducted. Also, in such a
        case, the ticket(s) cannot be claimed for a refund.
        <br />
        Once your request is validated, you will be sent an acknowledgement
        along with a contact for further communication, and will be requested to
        collect your swag/gifts kit from the following address: <br />
      </p>
      <p className="mt-5 font-bold">
        Yeshwantrao Chavan College of Engineering, Hingna Rd, <br /> Wanadongri,
        Nagpur, Maharashtra 441110
      </p>

      <p className="italic ">
        Note: Ticket Cancellation Rights cannot be exercised to re-claim the
        food/lunch offered at venue, after the lunchtime is over.
      </p>

      <ParaHeading>Contact Us</ParaHeading>
      <p>
        If you have any questions about our Returns and Refunds Policy, please
        contact us:
        <ul className="font-bold list-disc">
          <li>
            By email:
            <a className="underline" href="mailto:tedxycce@gmail.com">
              tedxycce@gmail.com
            </a>
          </li>
        </ul>
      </p>
    </div>
  </div>
);

export default Refunds;
