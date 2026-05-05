import Image from "next/image";

export default function BlueprintSection() {
  return (
    <>
      {/* Header */}
      <div className="blueprint-header">
        <span style={{ color: "#EEF430" }}>
          The Tech Blueprint for the
        </span>
        {" "} <b>  Best User Experience </b>
      </div>

      {/* Section */}
   <section className="blueprint-section ">
  <div className="container-blueprint">
    <div className="row align-items-center">

      {/* Image */}
      <div className="col-md-6 text-center">
        <Image
          src="/images/blueprint.webp"
          alt="Blueprint"
          width={504}
          height={336}
          priority
        />
      </div>

      {/* Content */}
      <div className="col-md-5">
        <h4 className="mb-3">
          Custom websites, applications, and integrations designed with a "people first" mindset.
        </h4>

        <p className="mb-3">
          Unlike most tech companies, we don’t start with a tech stack. We don’t tell you how good we know our tech and coding. Instead, we start with your end goal and reverse engineer the process to meet it.
        </p>

        <p className="mb-0">
          Our approach ensures the final product isn't just technically sound, but creates an experience that makes users want to return again and again.
        </p>
      </div>

    </div>
  </div>
</section>
    </>
  );
}