export default function AboutUs() {
  return (
    <section className="about-us">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.2466653625024!2d44.774742915152714!3d41.7151958792355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044732bb0d3a653%3A0x5a1114bbb3dcbc05!2s4%20Simon%20Chikovani%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1671351447506!5m2!1sen!2sge"
        width="800"
        height="650"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="about-bootcamp">
        <h1>რა არის ბუთკემპი?</h1>
        <p>
          Bootcamp ეწოდება ინტენსიურ სასწავლო კურსს, რომლის მიზანიც მონაწილეთა
          დასაქმებისთვის სრული მომზადებაა
        </p>
        <p>
          სტანდარტული კურსებისგან განსხვავებით, ბუთკემპში სწავლა კვირაში 5 დღე
          და დღეში 4 საათი მიმდინარეობს
        </p>
      </div>
    </section>
  );
}
