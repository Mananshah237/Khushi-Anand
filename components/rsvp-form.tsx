<form
  action="https://formsubmit.co/khushiandanand2026@gmail.com"
  method="POST"
  className="space-y-6"
>
  {/* Optional hidden fields for enhanced UX */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="box" />
  <input type="hidden" name="_next" value="https://khushi-anand.vercel.app/#rsvp-success" />

  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
      Full Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
      placeholder="Your name"
    />
  </div>

  <div>
    <label htmlFor="attending" className="block text-sm font-medium text-gray-700 mb-1">
      Will You Attend?
    </label>
    <select
      id="attending"
      name="attending"
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
    >
      <option value="yes">Yes, I will attend</option>
      <option value="no">No, I cannot attend</option>
    </select>
  </div>

  <div>
    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
      Number of Guests
    </label>
    <select
      id="guests"
      name="guests"
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  </div>

  <div>
    <label htmlFor="dietary" className="block text-sm font-medium text-gray-700 mb-1">
      Dietary Restrictions
    </label>
    <textarea
      id="dietary"
      name="dietary"
      rows={3}
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
      placeholder="Let us know if you have any dietary restrictions"
    ></textarea>
  </div>

  <div>
    <button
      type="submit"
      className="w-full bg-gold hover:bg-dark-gold text-white font-medium py-3 px-4 rounded-md transition-colors duration-300"
    >
      Submit RSVP
    </button>
  </div>
</form>
