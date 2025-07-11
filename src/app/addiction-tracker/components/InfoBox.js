const links = {
  smoking: "https://www.cdc.gov/tobacco/data_statistics/fact_sheets/index.htm",
  alcohol: "https://www.niaaa.nih.gov/alcohols-effects-health",
  phone: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8352783/",
};

const tips = {
  smoking: "Use nicotine patches, avoid triggers, join support groups.",
  alcohol: "Keep a journal, find sober friends, seek therapy.",
  phone: "Use screen time limits, grayscale mode, and apps like Forest.",
};

export default function InfoBox({ addiction }) {
  return (
    <div className="p-4 border rounded mt-4">
      <h3 className="text-lg font-bold capitalize">{addiction} Help</h3>
      <p className="mt-2">{tips[addiction]}</p>
      <a
        href={links[addiction]}
        target="_blank"
        className="text-blue-600 underline mt-2 block"
      >
        Read more from scientific sources →
      </a>
    </div>
  );
}

